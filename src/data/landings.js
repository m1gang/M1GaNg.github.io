import {
  SiAstro,
  SiCloudflare,
  SiFramer,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { TbBrandTabler } from "react-icons/tb";

export const LANDINGS = [
  {
    id: "gamag",
    title: "Landing Page Gamag",
    description:
      "Landing page para la agencia Gamag, especializada en software y soluciones IA: propuesta de valor, comparativas, planes con precios, portafolio de proyectos y formulario de contacto con diagnóstico gratuito.",
    iconSrc: new URL(
      "../assets/img/icon-projects/gamag-logo.svg",
      import.meta.url,
    ).href,
    deployUrl: "https://gamag.dev/",
    deployLabel: "Sitio en producción",
    repoUrl: null,
    techs: [
      { name: "Astro", Icon: SiAstro },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Motion", Icon: SiFramer },
      { name: "Tabler Icons", Icon: TbBrandTabler },
      { name: "Cloudflare", Icon: SiCloudflare },
    ],
    images: [
      new URL(
        "../assets/img/projects/landing/gamag-landing.webp",
        import.meta.url,
      ).href,
    ],
  },
  {
    id: "kora",
    title: "Landing Page Kora",
    description:
      "Landing page para la agencia inmobiliaria KORA, especializada en bienes raíces de lujo: catálogo de propiedades exclusivas, servicios de compra, venta y renta, testimonios y contacto con oficinas en Lima.",
    iconSrc: new URL(
      "../assets/img/icon-projects/isotipo-kora.svg",
      import.meta.url,
    ).href,
    deployUrl: "https://kora-landing-page-phi.vercel.app/",
    deployLabel: "Vercel",
    repoUrl: "https://github.com/m1gang/kora-landingPage",
    techs: [
      { name: "Astro", Icon: SiAstro },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Vercel", Icon: SiVercel },
    ],
    images: [
      new URL(
        "../assets/img/projects/landing/kora-landing.webp",
        import.meta.url,
      ).href,
    ],
  },
  {
    id: "construcciones",
    title: "Landing Page Construcciones Sostenibles",
    description:
      "Landing page para Construcciones Sostenibles PE, estudio de arquitectura e ingeniería: catálogo de servicios técnicos, equipo colegiado, expedientes de obra y contacto directo por WhatsApp.",
    iconSrc: new URL(
      "../assets/img/icon-projects/logo-constSost.svg",
      import.meta.url,
    ).href,
    deployUrl: "https://www.construcciones-sostenibles.com/",
    deployLabel: "Sitio en producción",
    repoUrl: "https://github.com/m1gang/construcsostenibles-landingpage",
    techs: [
      { name: "Astro", Icon: SiAstro },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Cloudflare Workers", Icon: SiCloudflare },
    ],
    images: [
      new URL(
        "../assets/img/projects/landing/construcciones-sostenibles.webp",
        import.meta.url,
      ).href,
    ],
  },
  {
    id: "solux",
    title: "Landing Page Solux",
    description:
      "Landing page para una compañía industrial de energía renovable: hero de eficiencia energética, soluciones fotovoltaicas y BESS, casos de éxito con métricas y formulario de auditoría técnica.",
    iconSrc: new URL(
      "../assets/img/icon-projects/logo-solux.svg",
      import.meta.url,
    ).href,
    deployUrl: "https://solux-landing-page.vercel.app/",
    deployLabel: "Vercel",
    repoUrl: "https://github.com/m1gang/solux-landingPage",
    techs: [
      { name: "Astro", Icon: SiAstro },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Vercel", Icon: SiVercel },
    ],
    images: [
      new URL(
        "../assets/img/projects/landing/solux-landing.webp",
        import.meta.url,
      ).href,
    ],
  },
];
