import { MagicCard } from "../MagicCard";
import { HOBBY_GRADIENTS, HOBBIES } from "../../data/profile";

// Card 6 — hobbies con degradados en trazo y texto.
export const HobbiesGrid = () => (
  <MagicCard className="min-h-[9rem] lg:min-h-0 lg:col-start-1 lg:col-span-4 lg:row-start-3 lg:row-span-2 card-glass p-5 font-roboto flex flex-col justify-between gap-3">
    {/* Defs de degradados para trazo de íconos (referenciados por url(#)) */}
    <svg width="0" height="0" className="absolute w-0 h-0" aria-hidden="true" focusable="false">
      <defs>
        {HOBBY_GRADIENTS.map((gradient, idx) => (
          <linearGradient key={idx} id={`hobby-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradient.match(/#[0-9A-Fa-f]{6}/g)?.[0] || "#fff"} />
            <stop offset="100%" stopColor={gradient.match(/#[0-9A-Fa-f]{6}/g)?.[1] || "#fff"} />
          </linearGradient>
        ))}
      </defs>
    </svg>

    <div className="grid grid-cols-3 gap-2 h-full items-center justify-items-center">
      {HOBBIES.map(({ Icon, label, subtitle }, idx) => (
        <div key={label} className="flex flex-col items-center justify-center gap-2 text-center min-w-0 px-1">
          <Icon
            size={34}
            strokeWidth={1.6}
            style={{ stroke: `url(#hobby-grad-${idx})` }}
            className="drop-shadow-[0_0_10px_rgba(199,58,201,0.25)]"
          />
          <span
            className="text-sm font-bold leading-tight"
            style={{
              backgroundImage: HOBBY_GRADIENTS[idx],
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {label}
          </span>
          <span className="text-[10px] text-white/45 leading-tight">{subtitle}</span>
        </div>
      ))}
    </div>

    <p className="text-[11px] text-white/40 border-t border-white/10 pt-1.5 text-center">
      Equilibrio entre pensamiento visual, recreación y deporte.
    </p>
  </MagicCard>
);

export default HobbiesGrid;
