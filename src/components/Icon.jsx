import React from 'react';

const Icon = ({ 
  name, 
  size = 24, 
  color = 'currentColor', 
  className = '',
  ...props 
}) => {
  // Validación básica del nombre del icono
  if (!name) {
    console.warn('Icon component requires a "name" prop');
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={{ color }}
      {...props}
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
