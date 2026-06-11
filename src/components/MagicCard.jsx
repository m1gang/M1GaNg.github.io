import React from "react";

export const DEFAULT_PARTICLE_COUNT = 0;
export const DEFAULT_GLOW_COLOR = "";

export const MagicCard = ({
  children,
  className = "",
  disableAnimations,
  particleCount,
  glowColor,
  enableTilt,
  clickEffect,
  enableMagnetism,
  enableBorderGlow,
  initial,
  animate,
  transition,
  ...props
}) => {
  return (
    <div
      className={`${className} relative overflow-hidden transition-all duration-300 hover:bg-white/[0.02] hover:border-white/20`}
      {...props}
    >
      {children}
    </div>
  );
};
