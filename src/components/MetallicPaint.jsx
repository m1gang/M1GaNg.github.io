import { useMetallicGL } from "../hooks/useMetallicGL";
import { defaultParams } from "../lib/metallic/shaders";

export default function MetallicPaint({ imageData, params = defaultParams }) {
  const canvasRef = useMetallicGL({ imageData, params });
  return <canvas ref={canvasRef} className="block w-full h-full object-contain" />;
}
