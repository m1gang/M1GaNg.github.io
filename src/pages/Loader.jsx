import MetallicPaint, { parseLogoImage } from "../components/MetallicPaint";
import { useState, useEffect } from "react";

// replace with your own SVG
// NOTE: your SVG should have a bit of padding around the shape, to keep it from being cut off
// it should also have black fill color, to allow the metallic effect to show through the mask
// Use URL form so we always get an asset URL (avoids SVGR returning a component)
const logo = new URL("../assets/svg/migang-logo.svg", import.meta.url).href;

export const Loader = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
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
