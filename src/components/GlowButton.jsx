import { Link } from "react-router";
import { useReducedMotion } from "../lib/motion";

// Botón estilo Uiverse con borde degradado animado, estrella con gradiente y
// texto degradado. `glow`: css background del degradado. Acepta `href` o `to`.
const GlowButton = ({
  href,
  to,
  target,
  rel,
  glow,
  icon: IconComponent,
  label,
  className = "",
}) => {
  const reduce = useReducedMotion();
  const glowStyle = { background: glow };
  // Animaciones ambientales infinitas: fuera con prefers-reduced-motion.
  const loop = (animation) => (reduce ? {} : { animation });

  const inner = (
    <>
      {/* Halo fijo */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="inset-0 absolute pointer-events-none select-none">
          <span
            className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
            style={glowStyle}
          />
        </span>
      </span>

      {/* Halo animado recorriendo el borde */}
      <span
        className="inset-0 absolute pointer-events-none select-none"
        style={loop(
          "10s ease-in-out 0s infinite alternate none running border-glow-translate",
        )}
      >
        <span
          className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
          style={{
            ...loop(
              "10s ease-in-out 0s infinite alternate none running border-glow-scale",
            ),
            ...glowStyle,
          }}
        />
      </span>

      {/* Contenido centrado sobre fondo oscuro */}
      <span className="flex items-center justify-center gap-1 relative z-[1] bg-neutral-950/90 rounded-full py-2 px-4 w-full h-full">
        <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500 motion-reduce:transition-none">
          <IconComponent size={18} className="opacity-90" />
          <span
            className="rounded-full size-1 absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
            style={{
              ...loop(
                "14s ease-in-out 0s infinite alternate none running star-shine",
              ),
              ...glowStyle,
            }}
          />
        </span>
        <span className="bg-gradient-to-b ml-1.5 from-white to-white/50 bg-clip-text text-sm text-transparent group-hover:scale-105 transition transform-gpu">
          {label}
        </span>
      </span>
    </>
  );

  const cls = `group relative bg-neutral-800 rounded-full p-px overflow-hidden w-full ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }

  return href ? (
    <a href={href} target={target} rel={rel} className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" className={cls}>
      {inner}
    </button>
  );
};

export default GlowButton;
