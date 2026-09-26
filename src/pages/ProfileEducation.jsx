import { GraduationCap, Flame, Code2, Landmark, CheckCircle2, Sparkles, BadgeCheck, Layout, Palette, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { MagicCard } from "../components/MagicCard";
import { reveal, useReducedMotion } from "@/lib/motion";
import TechBadge from "../components/TechBadge";
import uncpLogo from "../assets/img/education/uncp-logo-2.webp";
import fisLogo from "../assets/img/education/fis-logo.webp";
import HtmlIcon from "../components/icons/tech/html.svg?react";
import CssIcon from "../components/icons/tech/css.svg?react";
import JavascriptIcon from "../components/icons/tech/javascript.svg?react";
import TypescriptIcon from "../components/icons/tech/typescript.svg?react";
import ReactIcon from "../components/icons/tech/react.svg?react";
import AstroIcon from "../components/icons/tech/astro.svg?react";
import TailwindIcon from "../components/icons/tech/tailwindcss.svg?react";
import ViteIcon from "../components/icons/tech/vitejs.svg?react";
import GitIcon from "../components/icons/tech/git.svg?react";
import GithubIcon from "../components/icons/tech/github.svg?react";
import PhpIcon from "../components/icons/tech/php.svg?react";
import MysqlIcon from "../components/icons/tech/mysql.svg?react";
import FirebaseIcon from "../components/icons/tech/firebase.svg?react";
import ReactQueryIcon from "../components/icons/tech/reactquery.svg?react";
import ZustandIcon from "../components/icons/tech/zustand.svg?react";
import FigmaIcon from "../components/icons/tech/figma.svg?react";
import BootstrapIcon from "../components/icons/tech/bootstrap.svg?react";
import MaterialUiIcon from "../components/icons/tech/materialui.svg?react";
import JqueryIcon from "../components/icons/tech/jquery.svg?react";
import GiphyIcon from "../components/icons/tech/giphy.svg?react";
import OpenCodeIcon from "../components/icons/tech/opencode.svg?react";
import LinearIcon from "../components/icons/tech/linear.svg?react";
import ObsidianIcon from "../components/icons/tech/obsidian.svg?react";
import TicktickIcon from "../components/icons/tech/ticktick.svg?react";
import OrcaIcon from "../components/icons/tech/orca.svg?react";
import FreecodecampIcon from "../components/icons/tech/freecodecamp.svg?react";
import UdemyIcon from "../components/icons/tech/udemy.svg?react";

const SKILL_GROUPS = [
  { title: "Frontend", icon: Layout, skills: [["HTML", HtmlIcon], ["CSS", CssIcon], ["JavaScript", JavascriptIcon], ["TypeScript", TypescriptIcon], ["React", ReactIcon], ["Astro", AstroIcon], ["Tailwind", TailwindIcon]] },
  { title: "Herramientas", icon: Wrench, skills: [["Vite", ViteIcon], ["Git", GitIcon], ["GitHub", GithubIcon], ["TickTick", TicktickIcon], ["Linear", LinearIcon], ["Orca", OrcaIcon], ["OpenCode", OpenCodeIcon], ["Obsidian", ObsidianIcon]] },
  { title: "Datos & Backend", icon: Code2, skills: [["PHP", PhpIcon], ["MySQL", MysqlIcon], ["Firebase", FirebaseIcon], ["React Query", ReactQueryIcon], ["Zustand", ZustandIcon]] },
  { title: "Diseño & UI", icon: Palette, skills: [["Figma", FigmaIcon], ["Bootstrap", BootstrapIcon], ["Material UI", MaterialUiIcon], ["jQuery", JqueryIcon], ["Giphy API", GiphyIcon]] },
];

const CERTIFICATIONS = [
  { title: "Responsive Web Design", source: "freeCodeCamp", sourceIcon: FreecodecampIcon, year: "2024", Icon: Flame, color: "#fb923c" },
  { title: "JavaScript Algorithms and Data Structures", source: "freeCodeCamp", sourceIcon: FreecodecampIcon, year: "2025", Icon: Code2, color: "#facc15" },
  { title: "Desarrollo Front-End", source: "Gobierno del Perú", sourceIcon: Landmark, year: "2025", Icon: Landmark, color: "#38bdf8" },
  { title: "Aprende TypeScript paso a paso", source: "Udemy", sourceIcon: UdemyIcon, year: "2025", Icon: CheckCircle2, color: "#a78bfa", featured: true },  { title: "React: De cero a experto", source: "Udemy", sourceIcon: UdemyIcon, year: "2026", Icon: Sparkles, color: "#34d399", featured: true },
];

const CertificationItem = ({ title, source, sourceIcon: SourceIcon, year, Icon, featured }) => (
  <div className={`group flex min-w-0 items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors ${featured ? "border-emerald-300/20 bg-emerald-300/[0.04]" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"}`}>
    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white/80">{SourceIcon ? <SourceIcon width={20} height={20} aria-hidden="true" /> : <Icon size={18} strokeWidth={1.7} aria-hidden="true" />}</span>
    <div className="min-w-0 flex-1"><h3 className="truncate text-xs font-semibold text-white/90">{title}</h3><p className="mt-0.5 text-[10px] text-white/45">{source}</p></div>
    <span className="shrink-0 text-[10px] font-bold tracking-[0.16em] text-white/45">{year}</span>
  </div>
);

const ProfileEducation = () => {
  const reduce = useReducedMotion();

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:min-h-0 lg:overflow-y-auto font-clash">
      <div className="grid min-h-full w-full grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-1">
        <motion.div
          {...reveal(reduce, { index: 0 })}
          className="lg:col-span-7 lg:row-span-1"
        >
          <MagicCard className="card-glass group relative flex min-h-[19rem] h-full flex-col justify-center overflow-hidden p-5 sm:p-7">
            <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative flex h-full flex-col justify-center gap-6">
              <div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-300"><GraduationCap size={25} strokeWidth={1.6} /></span><div><p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">Formación académica</p><p className="mt-1 text-sm text-emerald-300/90">2018 — 2023</p></div></div>
              <div className="max-w-2xl"><h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Universidad Nacional del Centro del Perú</h2><div className="mt-4 flex flex-wrap items-center gap-2.5 text-sm text-white/65"><span className="inline-flex items-center gap-2"><img src={fisLogo} alt="" className="size-5 object-contain" />Facultad de Ingeniería de Sistemas</span><span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs text-emerald-200">Bachiller en Ing. de Sistemas</span></div></div>
              <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4"><p className="max-w-md text-xs leading-relaxed text-white/45">Formación técnica con enfoque en sistemas, desarrollo web y resolución de problemas.</p><img src={uncpLogo} alt="Logo de la UNCP" className="h-16 w-auto shrink-0 object-contain opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.14)]" /></div>
            </div>
          </MagicCard>
        </motion.div>

        <motion.div
          {...reveal(reduce, { index: 1 })}
          className="lg:col-span-5 lg:row-span-1"
        >
          <MagicCard className="card-glass font-roboto flex min-h-[19rem] h-full flex-col p-5"><div className="mb-4 flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><BadgeCheck size={19} /></span><div><h2 className="text-sm font-semibold text-white/90">Certificados</h2><p className="text-[11px] text-white/40">Formación continua</p></div></div><div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain pr-1 [scrollbar-color:rgba(255,255,255,0.22)_transparent] [scrollbar-width:thin]">{CERTIFICATIONS.map((certification) => <CertificationItem key={certification.title} {...certification} />)}</div></MagicCard>
        </motion.div>

        <motion.div
          {...reveal(reduce, { index: 2 })}
          className="flex flex-1 flex-col lg:col-span-12 lg:row-span-1"
        >
          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map(({ title, icon: Icon, skills }) => (
              <MagicCard key={title} className="card-glass font-roboto flex min-h-[9rem] flex-col gap-3 p-4">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55"><Icon size={16} className="text-cyan-300" />{title}</div>
                <div className="flex flex-wrap content-start gap-2">
                  {skills.map(([name, icon]) => <TechBadge key={name} name={name} icon={icon} iconSize={18} className="gap-2 rounded-xl border-white/10 bg-[#2929293b] px-3.5 py-2.5 shadow-lg" textClassName="text-xs font-semibold text-white/75" iconClassName="opacity-95" />)}
                </div>
              </MagicCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ProfileEducation;
