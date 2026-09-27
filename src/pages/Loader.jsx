import MetallicPaint from "../components/MetallicPaint";
import { getLogoAsset } from "../lib/metallic/logoAsset";
import { useState, useEffect } from "react";

export const Loader = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getLogoAsset().then((parsedData) => {
      if (!cancelled) setImageData(parsedData?.imageData ?? null);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // El logo se muestra centrado a 200px; el canvas metálico aparece cuando el
  // parse (iniciado en main.jsx) termina.
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
      }}
    >
      {imageData && (
        <div
          style={{
            width: 200,
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <MetallicPaint
              imageData={imageData}
              params={{
                edge: 0.1,
                patternBlur: 0.005,
                patternScale: 2,
                refraction: 0.015,
                speed: 0.5,
                liquid: 0.07,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
