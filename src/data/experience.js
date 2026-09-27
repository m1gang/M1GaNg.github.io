// Datos de la página de Experiencia.
import {
  Monitor,
  Phone,
  Database,
  FileText,
  Globe,
  Wrench,
} from "lucide-react";
import ReactIcon from "../components/icons/tech/react.svg?react";
import TypescriptIcon from "../components/icons/tech/typescript.svg?react";
import ReactqueryIcon from "../components/icons/tech/reactquery.svg?react";
import FigmaIcon from "../components/icons/tech/figma.svg?react";
import HtmlIcon from "../components/icons/tech/html.svg?react";
import CssIcon from "../components/icons/tech/css.svg?react";
import JavascriptIcon from "../components/icons/tech/javascript.svg?react";
import PhpIcon from "../components/icons/tech/php.svg?react";
import MysqlIcon from "../components/icons/tech/mysql.svg?react";
import devdatepLogo from "../assets/img/education/devdatep.webp";
import condisaLogo from "../assets/img/education/condisa-romero.webp";
import uncpLogo from "../assets/img/education/uncp-logo-2.webp";

export const EXPERIENCES = [
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
