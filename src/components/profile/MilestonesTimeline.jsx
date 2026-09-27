import { MagicCard } from "../MagicCard";
import { MILESTONES } from "../../data/profile";

// Card 3 — trayectoria en línea de tiempo.
export const MilestonesTimeline = () => (
  <MagicCard className="hidden md:flex lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-1 card-glass px-4 py-3 font-roboto items-center">
    <ol className="relative grid w-full grid-cols-4 gap-2">
      {/* Línea que une los hitos */}
      <span
        aria-hidden="true"
        className="absolute left-[12.5%] right-[12.5%] top-[3.5px] h-px bg-white/15"
      />
      {MILESTONES.map((milestone) => (
        <li
          key={milestone.year}
          className="relative flex flex-col items-center gap-1.5 text-center min-w-0"
        >
          <span className="size-2 rounded-full bg-white/60 ring-4 ring-white/5" aria-hidden="true" />
          <span className="text-[11px] font-semibold tabular-nums text-white/90 leading-none">
            {milestone.year}
          </span>
          <span className="text-[10px] leading-tight text-white/45 line-clamp-2">
            {milestone.label}
          </span>
        </li>
      ))}
    </ol>
  </MagicCard>
);

export default MilestonesTimeline;
