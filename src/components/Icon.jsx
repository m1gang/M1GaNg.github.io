import React from "react";

const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  gradient, // Expecting an array of colors: [start, middle, end]
  className = "",
  style = {},
  ...props
}) => {
  // Validación básica del nombre del icono
  if (!name) {
    console.warn('Icon component requires a "name" prop');
    return null;
  }

  const gradientId = `icon-gradient-${name}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  if (gradient && Array.isArray(gradient) && gradient.length >= 2) {
    return (
      <svg
        width={size}
        height={size}
        className={className}
        style={{ ...style }}
        {...props}
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={gradient[0]} />
            {gradient.length > 2 && (
              <stop offset="50%" stopColor={gradient[1]} />
            )}
            <stop offset="100%" stopColor={gradient[gradient.length - 1]} />
          </linearGradient>
        </defs>
        <use href={`/sprite.svg#${name}`} fill={`url(#${gradientId})`} />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={style}
      fill={props.fill || color}
      {...props}
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
