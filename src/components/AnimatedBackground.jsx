import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      {/* Glow Rojo/Magenta (Izquierda Inferior) */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-red-600/40 blur-[120px] animate-blob mix-blend-screen opacity-80"></div>

      {/* Glow Azul/Cyan (Derecha Inferior) */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-cyan-500/30 blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>

      {/* Glow Púrpura sutil (Superior) */}
      <div className="absolute top-[-20%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
    </div>
  );
};

export default AnimatedBackground;
