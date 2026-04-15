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
      className={`${className} group relative p-px overflow-hidden h-full`}
      target={target}
    >
      <button
        onClick={onClick}
        className={` dark:bg-neutral-800 bg-neutral-200 hover:bg-neutral-800 rounded-full p-px overflow-hidden h-full w-full`}
      >
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span className="inset-0 absolute pointer-events-none select-none">
            <span
              className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
              style={{ background: gradientStyle }}
            ></span>
          </span>
        </span>

        <span
          className="inset-0 absolute pointer-events-none select-none group-hover:running"
          style={{
            animation:
              "border-glow-translate 10s ease-in-out infinite alternate",
            animationPlayState: "paused",
          }}
        >
          <span
            className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full group-hover:running"
            style={{
              animation: "border-glow-scale 10s ease-in-out infinite alternate",
              background: gradientStyle,
              animationPlayState: "paused",
            }}
          ></span>
        </span>

        <span className="flex items-center justify-center gap-2 relative z-1 dark:bg-neutral-950/90 bg-neutral-50/90 group-hover:bg-neutral-950/90 rounded-full py-2 px-4 pl-3 w-full transition-colors duration-300">
          <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-360 duration-500">
            {icon && (
              <Icon
                name={icon}
                size={18}
                className="text-neutral-950 dark:text-white group-hover:text-white transition-colors duration-300 opacity-100 group-hover:opacity-100 group-hover:running"
                style={{
                  animation:
                    "star-rotate 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate",
                  animationPlayState: "paused",
                }}
              />
            )}
            <span
              className="rounded-full size-11 absolute opacity-0 dark:opacity-30 group-hover:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg transition-opacity duration-300 group-hover:running"
              style={{
                animation: "star-shine 14s ease-in-out infinite alternate",
                background: gradientStyle,
                animationPlayState: "paused",
              }}
            ></span>
          </span>
          <span className="bg-linear-to-b dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 group-hover:from-white group-hover:to-white/50 bg-clip-text text-sm text-transparent group-hover:scale-105 transition-all transform-gpu font-medium duration-300">
            {children}
          </span>
        </span>
      </button>
    </Link>
  );
};
