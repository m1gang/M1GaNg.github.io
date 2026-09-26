import { motion, useReducedMotion } from "motion/react";
import { reveal } from "@/lib/motion";
import { MapPin, Monitor, Phone, Database, FileText, Globe, Wrench, Lightbulb } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import TechBadge from "../components/TechBadge";
import devdatepLogo from "../assets/img/education/devdatep.webp";
import condisaLogo from "../assets/img/education/condisa-romero.webp";
import uncpLogo from "../assets/img/education/uncp-logo-2.webp";
import ReactIcon from "../components/icons/tech/react.svg?react";
import TypescriptIcon from "../components/icons/tech/typescript.svg?react";
import ReactqueryIcon from "../components/icons/tech/reactquery.svg?react";
import FigmaIcon from "../components/icons/tech/figma.svg?react";
import HtmlIcon from "../components/icons/tech/html.svg?react";
import CssIcon from "../components/icons/tech/css.svg?react";
import JavascriptIcon from "../components/icons/tech/javascript.svg?react";
import PhpIcon from "../components/icons/tech/php.svg?react";
import MysqlIcon from "../components/icons/tech/mysql.svg?react";

const EXPERIENCES = [
  {
    id: "devdatep",
    company: "DEVDATEP CONSULTING",
    role: "Desarrollador React Junior · Líder Frontend",
    period: "Feb 2026 — May 2026",
    place: "Lima, Perú",
    mode: "Remoto",
    ModeIcon: Monitor,
    logo: devdatepLogo,
    logoAlt: "Logo de Devdatep Consulting",
    context: "Agencia de marketing y software · intranets corporativas.",
    impact: [
      "Interfaces de intranet (Onboarding y Reclutamiento) con React y Zod.",
      "Liderazgo técnico: maquetación desde Figma y documentación.",
      "Requerimientos y entregas del área frontend con stakeholders.",
    ],
    stack: [
      { name: "React", Icon: ReactIcon },
      { name: "TypeScript", Icon: TypescriptIcon },
      { name: "React Query", Icon: ReactqueryIcon },
      { name: "Supabase", Icon: Database, iconClassName: "text-emerald-400" },
      { name: "Figma", Icon: FigmaIcon },
    ],
    learning: "Liderar el flujo diseño → documentación → desarrollo.",
  },
  {
    id: "condisa",
    company: "CONDISA ROMERO S.A.C.",
    role: "Desarrollador Web & Soporte Técnico",
    period: "Ago 2023 — Feb 2024",
    place: "Lima, Perú",
    mode: "Remoto",
    ModeIcon: Monitor,
    logo: condisaLogo,
    logoAlt: "Logo de Condisa Romero",
    context: "Constructora peruana · arquitectura e ingeniería.",
    impact: [
      "Web corporativa con HTML, CSS, JS y PHP.",
      "Sistema POS para librería: inventario y facturación.",
      "Soporte remoto: drivers y software de construcción.",
    ],
    stack: [
      { name: "HTML", Icon: HtmlIcon },
      { name: "CSS", Icon: CssIcon },
      { name: "JavaScript", Icon: JavascriptIcon },
      { name: "PHP", Icon: PhpIcon },
      { name: "MySQL", Icon: MysqlIcon },
    ],
    learning: "Sistemas en producción con equipos multidisciplinarios.",
  },
  {
    id: "uncp",
    company: "UNCP · Oficina de T.I.",
    role: "Practicante Preprofesional en Informática",
    period: "Ene 2022 — Abr 2022",
    place: "Huancayo, Perú",
    mode: "Presencial",
    ModeIcon: Phone,
    logo: uncpLogo,
    logoAlt: "Logo de la UNCP",
    context: "Sistemas de la universidad · portal, VoIP y soporte.",
    impact: [
      "Soporte VoIP y sistemas institucionales.",
      "Digitalización y gestión documental interna.",
      "Mantenimiento preventivo en laboratorios y oficinas.",
    ],
    stack: [
      { name: "Servicios Web", Icon: Globe },
      { name: "Transparencia", Icon: FileText },
      { name: "Telefonía VoIP", Icon: Phone },
      { name: "Soporte técnico", Icon: Wrench },
    ],
    learning: "Resolución bajo presión uniendo diseño y funcionalidad.",
  },
];

const Experience = () => {
  const reduce = useReducedMotion();

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col overflow-y-auto lg:h-screen lg:min-h-0 lg:overflow-y-auto font-clash">
      <ol className="relative flex flex-col gap-5 lg:gap-6 pl-7 lg:pl-10 pb-2">
        <span
          aria-hidden="true"
          className="absolute left-[9px] lg:left-[13px] top-3 bottom-6 w-px bg-white/12"
        />

        {EXPERIENCES.map((exp, index) => (
          <motion.li
            key={exp.id}
            {...reveal(reduce, { index, y: 18, duration: 0.55, stagger: 0.08 })}
            className="relative"
          >
            <span
              aria-hidden="true"
              className="absolute -left-7 lg:-left-10 top-7 grid place-items-center"
            >
              <span className="grid size-[19px] place-items-center rounded-full border border-white/20 bg-[#101010]">
                <span className="size-2 rounded-full bg-white" />
              </span>
            </span>

            <MagicCard className="card-glass p-5 lg:p-6 font-roboto flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <img
                  src={exp.logo}
                  alt={exp.logoAlt}
                  className="w-14 h-14 shrink-0 rounded-xl border border-white/15 bg-white/10 object-contain p-1"
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h2 className="text-lg lg:text-xl font-bold tracking-tight text-white leading-tight">
                      {exp.company}
                    </h2>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold tabular-nums text-white/70">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-[15px] font-medium text-white/90 leading-snug">
                    {exp.role}
                  </p>
                  <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-white/55">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} aria-hidden="true" />
                      {exp.place}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <exp.ModeIcon size={13} aria-hidden="true" />
                      {exp.mode}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-[13px] leading-relaxed text-white/45 border-t border-white/10 pt-3">
                {exp.context}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <ul className="md:col-span-7 flex flex-col justify-center gap-2.5">
                  {exp.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-white/50"
                      />
                      <p className="text-sm leading-relaxed text-white/80">{item}</p>
                    </li>
                  ))}
                </ul>

                <div className="md:col-span-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(({ name, Icon, iconClassName }) => (
                      <TechBadge
                        key={name}
                        name={name}
                        icon={Icon}
                        iconSize={16}
                        iconClassName={iconClassName ?? ""}
                        textClassName="text-xs font-medium text-white/75"
                        className="rounded-lg px-2.5 py-1.5"
                      />
                    ))}
                  </div>
                  <p className="flex items-start gap-2 border-t border-white/10 pt-3 text-[13px] leading-relaxed text-white/65">
                    <Lightbulb size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-amber-300" />
                    {exp.learning}
                  </p>
                </div>
              </div>
            </MagicCard>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
