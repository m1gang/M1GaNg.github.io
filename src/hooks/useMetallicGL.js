import { useEffect, useRef } from "react";
import {
  defaultParams,
  liquidFragSource,
  vertexShaderSource,
} from "../lib/metallic/shaders";

// WebGL2 de MetallicPaint: setup de shaders, render loop, resize y textura.
// Centraliza el estado GL en refs para evitar condiciones de carrera.
export const useMetallicGL = ({ imageData, params = defaultParams }) => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const uniformsRef = useRef({});
  const totalAnimationTime = useRef(0);
  const lastRenderTime = useRef(0);

  function updateUniforms() {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    if (!gl || !uniforms) return;
    gl.uniform1f(uniforms.u_edge, params.edge);
    gl.uniform1f(uniforms.u_patternBlur, params.patternBlur);
    gl.uniform1f(uniforms.u_time, 0);
    gl.uniform1f(uniforms.u_patternScale, params.patternScale);
    gl.uniform1f(uniforms.u_refraction, params.refraction);
    gl.uniform1f(uniforms.u_liquid, params.liquid);
  }

  useEffect(() => {
    function initShader() {
      const canvas = canvasRef.current;
      const gl = canvas?.getContext("webgl2", {
        antialias: true,
        alpha: true,
      });
      if (!canvas || !gl) {
        return;
      }

      function createShader(gl, sourceCode, type) {
        const shader = gl.createShader(type);
        if (!shader) {
          return null;
        }

        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error(
            "An error occurred compiling the shaders: " +
              gl.getShaderInfoLog(shader)
          );
          gl.deleteShader(shader);
          return null;
        }

        return shader;
      }

      const vertexShader = createShader(
        gl,
        vertexShaderSource,
        gl.VERTEX_SHADER
      );
      const fragmentShader = createShader(
        gl,
        liquidFragSource,
        gl.FRAGMENT_SHADER
      );
      const program = gl.createProgram();
      if (!program || !vertexShader || !fragmentShader) {
        return;
      }

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(
          "Unable to initialize the shader program: " +
            gl.getProgramInfoLog(program)
        );
        return null;
      }

      function getUniforms(program, gl) {
        let uniforms = {};
        let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
          let uniformName = gl.getActiveUniform(program, i)?.name;
          if (!uniformName) continue;
          uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
        }
        return uniforms;
      }
      const uniforms = getUniforms(program, gl);
      uniformsRef.current = uniforms;

      const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
      const vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      gl.useProgram(program);

      // Ensure we have a clear color and clear the buffer initially.
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const positionLocation = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(positionLocation);

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Set sensible defaults for the new uniforms if they exist.
      try {
        if (uniforms.u_show) gl.uniform1f(uniforms.u_show, 0.0);
        if (uniforms.u_img_scale) gl.uniform1f(uniforms.u_img_scale, 1.0); // Full size (no crop)
      } catch {
        // ignore if uniforms are not yet available
      }

      glRef.current = gl; // Store gl in ref for immediate availability
    }

    initShader();
    updateUniforms();
  }, []);

  useEffect(() => {
    if (!glRef.current || !uniformsRef.current) return;
    updateUniforms();
  }, [params]);

  useEffect(() => {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    // Wait until uniforms are available (u_time is required). If we start the
    // render loop before uniform locations are ready, calls like
    // gl.uniform1f(undefined, ...) will throw and nothing will render.
    if (!gl || !uniforms || !uniforms.u_time) return;

    let renderId;

    function render(currentTime) {
      const deltaTime = currentTime - lastRenderTime.current;
      lastRenderTime.current = currentTime;

      totalAnimationTime.current += deltaTime * params.speed;

      // Clear the drawing buffer so we always start from a known state.
      gl.clear(gl.COLOR_BUFFER_BIT);

      try {
        gl.uniform1f(uniforms.u_time, totalAnimationTime.current);
      } catch (err) {
        // If uniform locations are not valid for some reason, log and stop.
        console.error("Uniform update failed:", err);
        return;
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      renderId = requestAnimationFrame(render);
    }

    lastRenderTime.current = performance.now();
    renderId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(renderId);
    };
  }, [params.speed]);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    if (!canvasEl || !gl || !uniforms) return;

    function resizeCanvas() {
      if (!canvasEl || !gl || !uniforms || !imageData) return;
      const imgRatio = imageData.width / imageData.height;
      gl.uniform1f(uniforms.u_img_ratio, imgRatio);

      // Get the actual size of the canvas element (set by parent container)
      const rect = canvasEl.getBoundingClientRect();
      const logicalWidth = rect.width;
      const logicalHeight = rect.height;

      // Set canvas resolution to match logical size with device pixel ratio
      canvasEl.width = logicalWidth * devicePixelRatio;
      canvasEl.height = logicalHeight * devicePixelRatio;

      gl.viewport(0, 0, canvasEl.width, canvasEl.height);
      gl.uniform1f(uniforms.u_ratio, 1);
      gl.uniform1f(uniforms.u_img_ratio, imgRatio);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [imageData]);

  useEffect(() => {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    if (!gl || !uniforms) return;

    const existingTexture = gl.getParameter(gl.TEXTURE_BINDING_2D);
    if (existingTexture) {
      gl.deleteTexture(existingTexture);
    }

    const imageTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, imageTexture);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

    try {
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        imageData?.width,
        imageData?.height,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        imageData?.data
      );

      gl.uniform1i(uniforms.u_image_texture, 0);

      // Fade in the 'u_show' uniform so we don't show a full-screen metallic
      // quad before the actual texture is ready.
      if (uniforms.u_show) {
        const start = performance.now();
        const duration = 50;
        function fade(t) {
          const v = Math.min(1, (t - start) / duration);
          gl.uniform1f(uniforms.u_show, v);
          if (v < 1) requestAnimationFrame(fade);
        }
        requestAnimationFrame(fade);
      }
    } catch (e) {
      console.error("Error uploading texture:", e);
    }

    return () => {
      if (imageTexture) {
        gl.deleteTexture(imageTexture);
      }
    };
  }, [imageData]);

  return canvasRef;
};
