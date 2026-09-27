// Datos de la portada (Home) — bento grid.
import CodeIcon from "../assets/svg/skills/code.svg?react";
import SupportIcon from "../assets/svg/skills/support.svg?react";
import DesignIcon from "../assets/svg/skills/design.svg?react";
import LearningIcon from "../assets/svg/skills/learning.svg?react";
import UiUxIcon from "../assets/svg/skills/ui_ux.svg?react";
import TeamIcon from "../assets/svg/skills/team.svg?react";
import ProyectosIcon from "../components/icons/custom/proyectos.svg?react";
import CertificacionIcon from "../components/icons/custom/certificacion.svg?react";
import ExperienciaLaboralIcon from "../components/icons/custom/experiencia-laboral.svg?react";
import ExperienciaIcon from "../components/icons/custom/experiencia.svg?react";
import ReactIcon from "../components/icons/tech/react.svg?react";
import TailwindIcon from "../components/icons/tech/tailwindcss.svg?react";
import ViteIcon from "../components/icons/tech/vitejs.svg?react";
import JavascriptIcon from "../components/icons/tech/javascript.svg?react";
import CssIcon from "../components/icons/tech/css.svg?react";
import HtmlIcon from "../components/icons/tech/html.svg?react";
import GitIcon from "../components/icons/tech/git.svg?react";
import GithubIcon from "../components/icons/tech/github.svg?react";
import FigmaIcon from "../components/icons/tech/figma.svg?react";

// Card 4 — skills (mismo lenguaje visual que los hobbies de Sobre mí).
export const SKILLS = [
  {
    Icon: CodeIcon,
    title: "Desarrollo web",
    subtitle: "Front end con React",
    chip: "bg-[#8b8afd]/10",
    textGradient: "linear-gradient(135deg, #00C6FB, #005BEA, #C73AC9)",
  },
  {
    Icon: SupportIcon,
    title: "Soporte técnico",
    subtitle: "Optimización",
    chip: "bg-[#343d4e]/10",
    textGradient: "linear-gradient(135deg, #FFF4E4, #F0F6EE, #E7F0F0)",
  },
  {
    Icon: DesignIcon,
    title: "Diseño gráfico",
    subtitle: "Corel, Branding",
    chip: "bg-[#cc1b75]/10",
    textGradient: "linear-gradient(135deg, #F2A968, #CA1462, #8A2A86)",
  },
  {
    Icon: LearningIcon,
    title: "Aprendizaje continuo",
    subtitle: "Siempre aprendiendo",
    chip: "bg-[#6d6d6d]/10",
    textGradient: "linear-gradient(135deg, #B6DBDB, #687D7D, #9C8B8B)",
  },
  {
    Icon: UiUxIcon,
    title: "UI / UX",
    subtitle: "Prototipos",
    chip: "bg-[#37d09e]/10",
    textGradient: "linear-gradient(135deg, #C3FAC7, #F5E896, #DEE084)",
  },
  {
    Icon: TeamIcon,
    title: "Comunicación",
    subtitle: "Trabajo en equipo",
    chip: "bg-[#afb1b7]/10",
    textGradient: "linear-gradient(135deg, #E7F0FD, #ACCBEE, #9DB6D1)",
  },
];

// Card 5 — badges de tecnologías.
export const TECH_BADGES = [
  { Icon: ReactIcon, label: "React" },
  { Icon: TailwindIcon, label: "Tailwind" },
  { Icon: ViteIcon, label: "Vite" },
  { Icon: JavascriptIcon, label: "Javascript" },
  { Icon: CssIcon, label: "CSS" },
  { Icon: HtmlIcon, label: "HTML" },
  { Icon: GitIcon, label: "Git" },
  { Icon: GithubIcon, label: "Github" },
  { Icon: FigmaIcon, label: "Figma" },
];

// Card 3 — estadísticas del bento.
export const STATS = [
  { value: "+17", Icon: ProyectosIcon, label: "Proyectos", valueClassName: "text-6xl" },
  { value: "+3", Icon: CertificacionIcon, label: "Certificaciones", valueClassName: "text-6xl" },
  { value: "3", Icon: ExperienciaLaboralIcon, label: "Experiencias", valueClassName: "text-6xl" },
  { value: "+1 año", Icon: ExperienciaIcon, label: "Trayectoria", valueClassName: "text-[50px]" },
];

// Proyecto destacado — card "Último proyecto" del bento.
export const FEATURED_PROJECT = {
  name: "Construcciones Sostenibles",
  tagline: "Landing page · Astro + Tailwind CSS",
  url: "https://github.com/m1gang/construcsostenibles-landingpage",
  demo: "https://www.construcciones-sostenibles.com/",
};

// Card 8 — calendario de contribuciones (props visuales; el fetch llega con PORT-34).
export const GITHUB_CALENDAR_PROPS = {
  username: "M1GaNg",
  colorScheme: "dark",
  theme: {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  },
  blockSize: 10,
  blockMargin: 3,
  fontSize: 11,
  showColorLegend: false,
  labels: {
    months: [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
    ],
    weekdays: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    totalCount: "{{count}} contribuciones en el último año",
    legend: { less: "Menos", more: "Más" },
  },
};
