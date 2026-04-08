import EvilEye from "./EvilEye";
import LightPillar from "./LightPillar";
import LightRays from "./LightRays";
import Noise from "./Noise";

export const AnimatedBackground = () => {
  return (
    <div style={{ width: "1080px", height: "1080px", position: "relative" }}>
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
    </div>
  );
};
