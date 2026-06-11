import React from "react";

export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
  };

  return (
    <span
      className={`relative mx-auto inline-flex max-w-fit flex-row items-center justify-center font-medium overflow-hidden ${className}`}
    >
      <span
        className="inline-block relative z-2 text-transparent font-bold bg-cover leading-[1.2]"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '100% 100%'
        }}
      >
        {children}
      </span>
    </span>
  );
}
