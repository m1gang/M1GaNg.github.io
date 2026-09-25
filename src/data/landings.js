import AstroIcon from "../components/icons/tech/astro.svg?react";
import TailwindIcon from "../components/icons/tech/tailwindcss.svg?react";
import {
  Cloud,
  Code2,
  Image as ImageIcon,
  LayoutGrid,
  ListChecks,
  Rocket,
  Shapes,
  Type,
  Zap,
} from "lucide-react";

const landingImage = (file) =>
  new URL(`../assets/img/projects/landing/${file}`, import.meta.url).href;

export const LANDINGS = [
  {
    id: "solux",
    title: "Solux",
    tagline: "Landing industrial · Energía solar",
    description:
      "Landing page para una compañía industrial de energía renovable: hero de eficiencia energética, soluciones fotovoltaicas y BESS, casos de éxito con métricas y formulario de auditoría técnica.",
    deployUrl: "https://solux-landing-page.vercel.app/",
    deployLabel: "Vercel",
    repoUrl: "https://github.com/m1gang/solux-landingPage",
    techs: [
      { name: "Astro", Icon: AstroIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "Geist Sans", Icon: Type },
      { name: "Sharp", Icon: ImageIcon },
      { name: "Vercel", Icon: Rocket },
    ],
    images: [landingImage("solux-landing.webp")],
  },
  {
    id: "kora",
    title: "Kora",
    tagline: "Landing inmobiliaria · Bienes raíces de lujo",
    description:
      "Landing page para la agencia inmobiliaria KORA: catálogo de propiedades exclusivas, servicios de compra, venta y renta, testimonios y contacto con oficinas en Lima.",
    deployUrl: "https://kora-landing-page-phi.vercel.app/",
    deployLabel: "Vercel",
    repoUrl: "https://github.com/m1gang/kora-landingPage",
    techs: [
      { name: "Astro", Icon: AstroIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "Tailwind Forms", Icon: ListChecks },
      { name: "Container Queries", Icon: LayoutGrid },
      { name: "Sharp", Icon: ImageIcon },
      { name: "Vercel", Icon: Rocket },
    ],
    images: [landingImage("kora-landing.webp")],
  },
  {
    id: "construcciones",
    title: "Construcciones Sostenibles",
    tagline: "Sitio corporativo · Arquitectura e ingeniería",
    description:
      "Sitio web corporativo para Construcciones Sostenibles PE: catálogo de servicios técnicos, equipo colegiado, expedientes de obra y contacto directo por WhatsApp.",
    deployUrl: "https://www.construcciones-sostenibles.com/",
    deployLabel: "Sitio en producción",
    repoUrl: "https://github.com/m1gang/construcsostenibles-landingpage",
    techs: [
      { name: "Astro", Icon: AstroIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "Sharp", Icon: ImageIcon },
      { name: "Cloudflare Workers", Icon: Cloud },
    ],
    images: [landingImage("construcciones-sostenibles.webp")],
  },
  {
    id: "gamag",
    title: "Gamag",
    tagline: "Landing de agencia · Software y soluciones IA",
    description:
      "Landing page para la agencia Gamag: propuesta de valor, comparativas, planes con precios, portafolio de proyectos y formulario de contacto con diagnóstico gratuito.",
    deployUrl: "https://gamag.dev/",
    deployLabel: "Sitio en producción",
    repoUrl: null,
    techs: [
      { name: "Astro", Icon: AstroIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "Astro Icon", Icon: Code2 },
      { name: "Motion", Icon: Zap },
      { name: "Tabler Icons", Icon: Shapes },
      { name: "Cloudflare", Icon: Cloud },
    ],
    images: [landingImage("gamag-landing.webp")],
  },
];
