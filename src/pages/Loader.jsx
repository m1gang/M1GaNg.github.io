import MetallicPaint from "../components/MetallicPaint";
import { parseLogoImage } from "../lib/metallic/parseLogoImage";
import { useState, useEffect } from "react";

// Logo en public/ (preindexado desde index.html) para que el fetch viaje en
// paralelo al bundle.
const LOGO_URL = "/migang-logo.svg";

export const Loader = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadDefaultImage() {
      try {
        const response = await fetch(LOGO_URL);
        const blob = await response.blob();

        const parsedData = await parseLogoImage(blob);
        if (!cancelled) setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
    return () => {
      cancelled = true;
    };
  }, []);

  // Always render the MetallicPaint canvas immediately (use a tiny fallback
  // ImageData until the parsed imageData is ready). The logo is shown in a
  // centered container and scaled to a smaller size for a cleaner loader UI.
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
