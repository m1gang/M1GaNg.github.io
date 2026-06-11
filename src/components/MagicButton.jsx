import React from "react";
import Icon from "./Icon";
import { Link } from "react-router";

export const MagicButton = ({
  children,
  icon,
  gradientColors = ["#7A69F9", "#F26378", "#F5833F"],
  onClick,
  className = "",
  to,
  target,
}) => {
  const gradientStyle = `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`;

  return (
    <Link
      to={to}
      className={`${className} group relative p-[1px] overflow-hidden rounded-full inline-block`}
      target={target}
    >
      <button
        onClick={onClick}
        className="w-full h-full rounded-full p-[1px] overflow-hidden transition-all duration-300"
        style={{ background: gradientStyle }}
      >
        <span className="flex items-center justify-center gap-2 relative z-1 bg-black hover:bg-neutral-900 rounded-full py-2.5 px-6 transition-colors duration-300 text-white font-medium text-sm">
          {icon && (
            <Icon
              name={icon}
              size={18}
              className="text-white opacity-90"
            />
          )}
          <span>{children}</span>
        </span>
      </button>
    </Link>
  );
};
