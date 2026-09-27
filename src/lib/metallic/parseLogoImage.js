// Parse del logo para MetallicPaint: máscara de forma + campo de distancias
// (resolución de Laplace) que alimenta la textura del shader.
// Optimizado: createImageBitmap (decodificación fuera del hilo principal) y
// resolución máxima de 400px — el canvas se muestra a 200px CSS.
const MAX_SIZE = 400;
const MIN_SIZE = 320;

const loadImage = (blob) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(blob);
  });

export async function parseLogoImage(blob) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Invalid context");

  // Decodificación: createImageBitmap cuando está disponible (no bloquea el
  // hilo principal), con fallback a Image.
  let bitmap = null;
  let img = null;
  try {
    bitmap = await createImageBitmap(blob);
  } catch {
    img = await loadImage(blob);
  }

  const naturalWidth = bitmap?.width || img?.naturalWidth || 0;
  const naturalHeight = bitmap?.height || img?.naturalHeight || 0;
  if (!naturalWidth || !naturalHeight) {
    throw new Error("Failed to load image");
  }

  let width = naturalWidth;
  let height = naturalHeight;

  if (
    width > MAX_SIZE ||
    height > MAX_SIZE ||
    width < MIN_SIZE ||
    height < MIN_SIZE
  ) {
    if (width > height) {
      if (width > MAX_SIZE) {
        height = Math.round((height * MAX_SIZE) / width);
        width = MAX_SIZE;
      } else if (width < MIN_SIZE) {
        height = Math.round((height * MIN_SIZE) / width);
        width = MIN_SIZE;
      }
    } else {
      if (height > MAX_SIZE) {
        width = Math.round((width * MAX_SIZE) / height);
        height = MAX_SIZE;
      } else if (height < MIN_SIZE) {
        width = Math.round((width * MIN_SIZE) / height);
        height = MIN_SIZE;
      }
    }
  }

  canvas.width = width;
  canvas.height = height;

  const shapeCanvas = document.createElement("canvas");
  shapeCanvas.width = width;
  shapeCanvas.height = height;
  const shapeCtx = shapeCanvas.getContext("2d");
  if (bitmap) {
    shapeCtx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
  } else {
    shapeCtx.drawImage(img, 0, 0, width, height);
    URL.revokeObjectURL(img.src);
  }

  const shapeImageData = shapeCtx.getImageData(0, 0, width, height);
  const data = shapeImageData.data;
  const shapeMask = new Array(width * height).fill(false);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx4 = (y * width + x) * 4;
      const r = data[idx4];
      const g = data[idx4 + 1];
      const b = data[idx4 + 2];
      const a = data[idx4 + 3];
      shapeMask[y * width + x] = !(
        (r === 255 && g === 255 && b === 255 && a === 255) ||
        a === 0
      );
    }
  }

  function inside(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return false;
    return shapeMask[y * width + x];
  }

  const boundaryMask = new Array(width * height).fill(false);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!shapeMask[idx]) continue;
      let isBoundary = false;
      for (let ny = y - 1; ny <= y + 1 && !isBoundary; ny++) {
        for (let nx = x - 1; nx <= x + 1 && !isBoundary; nx++) {
          if (!inside(nx, ny)) {
            isBoundary = true;
          }
        }
      }
      if (isBoundary) {
        boundaryMask[idx] = true;
      }
    }
  }

  const interiorMask = new Array(width * height).fill(false);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (
        shapeMask[idx] &&
        shapeMask[idx - 1] &&
        shapeMask[idx + 1] &&
        shapeMask[idx - width] &&
        shapeMask[idx + width]
      ) {
        interiorMask[idx] = true;
      }
    }
  }

  const u = new Float32Array(width * height).fill(0);
  const newU = new Float32Array(width * height).fill(0);
  const C = 0.01;
  const ITERATIONS = 150;

  function getU(x, y, arr) {
    if (x < 0 || x >= width || y < 0 || y >= height) return 0;
    if (!shapeMask[y * width + x]) return 0;
    return arr[y * width + x];
  }

  for (let iter = 0; iter < ITERATIONS; iter++) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = y * width + x;
        if (!shapeMask[idx] || boundaryMask[idx]) {
          newU[idx] = 0;
          continue;
        }
        const sumN =
          getU(x + 1, y, u) +
          getU(x - 1, y, u) +
          getU(x, y + 1, u) +
          getU(x, y - 1, u);
        newU[idx] = (C + sumN) / 4;
      }
    }
    u.set(newU);
  }

  let maxVal = 0;
  for (let i = 0; i < width * height; i++) {
    if (u[i] > maxVal) maxVal = u[i];
  }
  const alpha = 2.0;
  const outImg = ctx.createImageData(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const px = idx * 4;
      if (!shapeMask[idx]) {
        outImg.data[px] = 255;
        outImg.data[px + 1] = 255;
        outImg.data[px + 2] = 255;
        outImg.data[px + 3] = 255;
      } else {
        const raw = u[idx] / maxVal;
        const remapped = Math.pow(raw, alpha);
        const gray = 255 * (1 - remapped);
        outImg.data[px] = gray;
        outImg.data[px + 1] = gray;
        outImg.data[px + 2] = gray;
        outImg.data[px + 3] = 255;
      }
    }
  }

  ctx.putImageData(outImg, 0, 0);

  const pngBlob = await new Promise((resolve, reject) => {
    canvas.toBlob((b) => {
      if (!b) {
        reject(new Error("Failed to create PNG blob"));
        return;
      }
      resolve(b);
    }, "image/png");
  });

  return {
    imageData: outImg,
    pngBlob,
  };
}
