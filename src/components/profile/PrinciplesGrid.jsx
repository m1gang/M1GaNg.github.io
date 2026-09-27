import { ExternalLink } from "lucide-react";
import { MagicCard } from "../MagicCard";
import { WORKING_PRINCIPLES } from "../../data/profile";

// Card 8 — filosofía de trabajo con degradados.
export const PrinciplesGrid = () => (
  <MagicCard className="min-h-[10rem] lg:min-h-0 lg:col-start-1 lg:col-span-8 lg:row-start-5 lg:row-span-2 card-glass p-5 font-roboto flex flex-col justify-between">
    <svg width="0" height="0" className="absolute w-0 h-0" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="principle-code" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22C55E" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient>
        <linearGradient id="principle-ux" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FB923C" /><stop offset="100%" stopColor="#DB2777" /></linearGradient>
        <linearGradient id="principle-team" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#A78BFA" /><stop offset="100%" stopColor="#38BDF8" /></linearGradient>
      </defs>
    </svg>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
      {WORKING_PRINCIPLES.map(({ Icon, title, description, gradient, gradientId }) => (
        <div key={title} className="flex min-w-0 flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span
              className="grid size-8 shrink-0 place-items-center rounded-lg"
              style={{ stroke: `url(#${gradientId})` }}
            >
              <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h4
              className="text-xs font-semibold leading-tight"
              style={{
                backgroundImage: gradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </h4>
          </div>
          <p className="text-[12px] leading-relaxed text-white/65">{description}</p>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[11px] text-white/50">
      <span>Objetivo: aportar valor real desde el primer día en proyectos colaborativos.</span>
      <a
        href="https://www.linkedin.com/in/miguel-%C3%A1ngel-yapias-veli-60641b194/?trk=opento_sprofile_goalscard"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
      >
        <span>LinkedIn</span>
        <ExternalLink size={11} />
      </a>
    </div>
  </MagicCard>
);

export default PrinciplesGrid;
