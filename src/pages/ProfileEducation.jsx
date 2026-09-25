import { GraduationCap, Flame, Code2, Landmark, CheckCircle2, Sparkles, BadgeCheck } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import uncpLogo from "../assets/img/education/uncp-logo-2.webp";
import fisLogo from "../assets/img/education/fis-logo.webp";
import FreecodecampIcon from "../components/icons/tech/freecodecamp.svg?react";
import UdemyIcon from "../components/icons/tech/udemy.svg?react";

const CERTIFICATIONS = [
  { title: "Responsive Web Design", source: "freeCodeCamp", sourceIcon: FreecodecampIcon, year: "2024", Icon: Flame, color: "#fb923c" },
  { title: "JavaScript Algorithms and Data Structures", source: "freeCodeCamp", sourceIcon: FreecodecampIcon, year: "2025", Icon: Code2, color: "#facc15" },
  { title: "Desarrollo Front-End", source: "Gobierno del Perú", sourceIcon: Landmark, year: "2025", Icon: Landmark, color: "#38bdf8" },
  { title: "Aprende TypeScript paso a paso", source: "Udemy", sourceIcon: UdemyIcon, year: "2025", Icon: CheckCircle2, color: "#a78bfa", featured: true },
  { title: "React: De cero a experto", source: "Udemy", sourceIcon: UdemyIcon, year: "2026", Icon: Sparkles, color: "#34d399", featured: true },
];

const CertificationItem = ({ title, source, sourceIcon: SourceIcon, year, Icon, featured }) => (
  <div className={`group flex min-w-0 items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors ${featured ? "border-emerald-300/20 bg-emerald-300/[0.04]" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"}`}>
    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white/80">{SourceIcon ? <SourceIcon width={20} height={20} aria-hidden="true" /> : <Icon size={18} strokeWidth={1.7} aria-hidden="true" />}</span>
    <div className="min-w-0 flex-1"><h3 className="truncate text-xs font-semibold text-white/90">{title}</h3><p className="mt-0.5 text-[10px] text-white/45">{source}</p></div>
    <span className="shrink-0 text-[10px] font-bold tracking-[0.16em] text-white/45">{year}</span>
  </div>
);

const ProfileEducation = () => (
  <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:min-h-0 lg:overflow-y-auto font-clash">
    <div className="grid min-h-full w-full grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-1">
      <MagicCard className="card-glass group relative flex min-h-[19rem] flex-col justify-center overflow-hidden p-5 sm:p-7 lg:col-span-7 lg:row-span-1">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative flex h-full flex-col justify-center gap-6">
          <div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-300"><GraduationCap size={25} strokeWidth={1.6} /></span><div><p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">Formación académica</p><p className="mt-1 text-sm text-emerald-300/90">2018 — 2023</p></div></div>
          <div className="max-w-2xl"><h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Universidad Nacional del Centro del Perú</h2><div className="mt-4 flex flex-wrap items-center gap-2.5 text-sm text-white/65"><span className="inline-flex items-center gap-2"><img src={fisLogo} alt="" className="size-5 object-contain" />Facultad de Ingeniería de Sistemas</span><span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs text-emerald-200">Bachiller en Ing. de Sistemas</span></div></div>
          <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4"><p className="max-w-md text-xs leading-relaxed text-white/45">Formación técnica con enfoque en sistemas, desarrollo web y resolución de problemas.</p><img src={uncpLogo} alt="Logo de la UNCP" className="h-16 w-auto shrink-0 object-contain opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.14)]" /></div>
        </div>
      </MagicCard>

      <MagicCard className="card-glass font-roboto flex min-h-[19rem] flex-col p-5 lg:col-span-5 lg:row-span-1"><div className="mb-4 flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><BadgeCheck size={19} /></span><div><h2 className="text-sm font-semibold text-white/90">Certificados</h2><p className="text-[11px] text-white/40">Formación continua</p></div></div><div className="flex flex-1 flex-col justify-center gap-2">{CERTIFICATIONS.map((certification) => <CertificationItem key={certification.title} {...certification} />)}</div></MagicCard>
  </div>
  </div>
);

export default ProfileEducation;
