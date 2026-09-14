import React from "react";

export const MagicCard = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`${className} relative overflow-hidden transition-all duration-300 hover:bg-white/[0.02] hover:border-white/20`}
      {...props}
    >
      {children}
    </div>
  );
};
