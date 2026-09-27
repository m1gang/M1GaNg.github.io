import { BriefcaseBusiness, MapPin, Clock } from "lucide-react";
import { MagicCard } from "../MagicCard";
import { LOCATION_LABEL } from "../../constants/contact";
import { ROLE } from "../../data/profile";

// Card 2 — puesto objetivo con degradados de trazo.
export const RoleCard = () => (
  <MagicCard className="hidden md:flex lg:col-start-7 lg:col-span-2 lg:row-start-1 lg:row-span-2 card-glass p-4 font-roboto flex flex-col justify-center">
    <svg width="0" height="0" className="absolute w-0 h-0" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="location-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#34D399" /><stop offset="100%" stopColor="#60A5FA" /></linearGradient>
        <linearGradient id="role-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#F472B6" /><stop offset="100%" stopColor="#818CF8" /></linearGradient>
      </defs>
    </svg>
    <div className="flex min-h-0 flex-1 flex-col justify-center gap-4">
      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-2.5">
        <span className="grid size-6 place-items-center" style={{ stroke: "url(#role-gradient)" }}>
          <BriefcaseBusiness size={18} strokeWidth={1.9} aria-hidden="true" />
        </span>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[14px] font-bold text-white">{ROLE.title}</p>
          <p className="mt-0.5 text-[11px] text-white/45">{ROLE.level}</p>
        </div>
      </div>

      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-2.5">
        <span className="grid size-6 place-items-center" style={{ stroke: "url(#location-gradient)" }}>
          <MapPin size={17} strokeWidth={1.9} aria-hidden="true" />
        </span>
        <p className="text-[12px] font-medium leading-relaxed text-white/80">{LOCATION_LABEL}</p>
      </div>

      <div className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-2.5">
        <span className="grid size-6 place-items-center text-white/45">
          <Clock size={15} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <p className="text-[11px] leading-relaxed text-white/45">Disponible para trabajo remoto o presencial</p>
      </div>
    </div>
  </MagicCard>
);

export default RoleCard;
