import React, { useState, useEffect } from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  const [position, setPosition] = useState({ top: "0%", left: "0%" });
  const [scale, setScale] = useState(1);

  // Paleta de colores tipo arcoíris con transiciones suaves
  const gradientColors = [
    '#dc2626', // Rojo profundo
    '#ea580c', // Rojo-Naranja
    '#f97316', // Naranja intenso
    '#fb923c', // Naranja claro
    '#fbbf24', // Naranja-Amarillo
    '#fcd34d', // Amarillo
    '#bef264', // Amarillo-Verde
    '#84cc16', // Verde lima
    '#65a30d', // Verde
    '#22c55e', // Verde esmeralda
    '#10b981', // Verde-Cian
    '#14b8a6', // Cian
    '#06b6d4', // Cian-Azul
    '#0ea5e9', // Azul claro
    '#3b82f6', // Azul
    '#2563eb', // Azul intenso
    '#1d4ed8', // Azul profundo
    '#7c3aed', // Azul-Púrpura
    '#a855f7', // Púrpura
    '#d946ef', // Púrpura-Magenta
    '#ec4899', // Magenta-Rosa
    '#f43f5e', // Rosa intenso
    '#dc2626', // Regresa a Rojo
  ];

  // Generar posición aleatoria
  const getRandomPosition = () => {
    return {
      top: Math.random() * 80 - 20 + "%",
      left: Math.random() * 80 - 20 + "%",
    };
  };

  useEffect(() => {
    // Cambiar posición de forma aleatoria cada 5 segundos
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
      setScale(0.8 + Math.random() * 0.4); // Escala entre 0.8 y 1.2
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColors.join(', ')})`,
    backgroundSize: '200% 100%',
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Blob con gradiente animado tipo GradientText + movimiento aleatorio */}
      <div
        className="absolute rounded-full mix-blend-screen blur-[100px] opacity-60 animate-gradient-blob"
        style={{
          width: "500px",
          height: "500px",
          top: position.top,
          left: position.left,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transition: "all 3000ms cubic-bezier(0.4, 0, 0.2, 1)",
          ...gradientStyle,
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
