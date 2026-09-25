import { Link } from "react-router";
import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import { EMAIL, LOCATION_LABEL } from "../constants/contact";
import profile from "../assets/img/migang-pics.webp";
import featuredProjectImg from "../assets/img/projects/landing/construcciones-sostenibles-1.webp";
import {
  ProjectsButtonIcon,
  ContactButtonIcon,
  CvButtonIcon,
} from "../components/ButtonIcon";
import ProyectosIcon from "../components/icons/custom/proyectos.svg?react";
import CertificacionIcon from "../components/icons/custom/certificacion.svg?react";
import ExperienciaLaboralIcon from "../components/icons/custom/experiencia-laboral.svg?react";
import ExperienciaIcon from "../components/icons/custom/experiencia.svg?react";
import CodeIcon from "../assets/svg/skills/code.svg?react";
import SupportIcon from "../assets/svg/skills/support.svg?react";
import DesignIcon from "../assets/svg/skills/design.svg?react";
import LearningIcon from "../assets/svg/skills/learning.svg?react";
import UiUxIcon from "../assets/svg/skills/ui_ux.svg?react";
import TeamIcon from "../assets/svg/skills/team.svg?react";
import MigangIsotipo from "../components/icons/custom/migang-isotipo.svg?react";
import MigangLogotipo from "../components/icons/custom/migang-logotipo.svg?react";
import ReactIcon from "../components/icons/tech/react.svg?react";
import TailwindIcon from "../components/icons/tech/tailwindcss.svg?react";
import ViteIcon from "../components/icons/tech/vitejs.svg?react";
import JavascriptIcon from "../components/icons/tech/javascript.svg?react";
import CssIcon from "../components/icons/tech/css.svg?react";
import HtmlIcon from "../components/icons/tech/html.svg?react";
import GitIcon from "../components/icons/tech/git.svg?react";
import GithubIcon from "../components/icons/tech/github.svg?react";
import FigmaIcon from "../components/icons/tech/figma.svg?react";
import { GitHubCalendar } from "react-github-calendar";

// ─── Grid layout (6 cols × 6 rows en lg, 4 cols en md, 1 col en sm) ──────────
//
//  lg (6×6):
//  ┌──────────┬──────────────────────────┐
//  │ FOTO     │ PRESENTACIÓN             │
//  │ [1-2,1-2]│ [3-6,1-2]               │
//  ├──────────┼───────────┬──────────────┤
//  │ STATS    │ SKILLS    │ TECHS        │
//  │ [1-2,3-4]│ [3-4,3-5] │ [5-6,3-4]  │
//  ├──────────┴───────────┼──────────────┤
//  │ LOGO                 │ BOTONES      │
//  │ [1-2,5]              │ [5-6,5]      │
//  ├────────────────────────────────────┬───────────────┤
//  │ CONTRIBUCIONES (GitHub) [1-4, row6] │ DESTACADO    │
//  │                                     │ [5-6, row6]  │
//  └────────────────────────────────────┴───────────────┘
//
//  md (4×auto): cada card ocupa filas/columnas definidas abajo
//               BOTONES en md → row horizontal (flex-row)
//  sm: columna única, misma dirección que lg (flex-col)

// ── GlowButton ────────────────────────────────────────────────────────────────
// Botón estilo Uiverse con borde degradado animado, estrella con gradiente y
// texto degradado. `glow`: css background del degradado. Acepta `href` o `to`.
const GlowButton = ({
  href,
  to,
  target,
  rel,
  glow,
  icon: IconComponent,
  label,
  className = "",
}) => {
  const glowStyle = { background: glow };

  const inner = (
    <>
      {/* Halo fijo */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="inset-0 absolute pointer-events-none select-none">
          <span
            className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
            style={glowStyle}
          />
        </span>
      </span>

      {/* Halo animado recorriendo el borde */}
      <span
        className="inset-0 absolute pointer-events-none select-none"
        style={{
          animation:
            "10s ease-in-out 0s infinite alternate none running border-glow-translate",
        }}
      >
        <span
          className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
          style={{
            animation:
              "10s ease-in-out 0s infinite alternate none running border-glow-scale",
            ...glowStyle,
          }}
        />
      </span>

      {/* Contenido centrado sobre fondo oscuro */}
      <span className="flex items-center justify-center gap-1 relative z-[1] bg-neutral-950/90 rounded-full py-2 px-4 w-full h-full">
        <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
          <IconComponent size={18} className="opacity-90" />
          <span
            className="rounded-full size-1 absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
            style={{
              animation:
                "14s ease-in-out 0s infinite alternate none running star-shine",
              ...glowStyle,
            }}
          />
        </span>
        <span className="bg-gradient-to-b ml-1.5 from-white to-white/50 bg-clip-text text-sm text-transparent group-hover:scale-105 transition transform-gpu">
          {label}
        </span>
      </span>
    </>
  );

  const cls = `group relative bg-neutral-800 rounded-full p-px overflow-hidden w-full ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }

  return href ? (
    <a href={href} target={target} rel={rel} className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" className={cls}>
      {inner}
    </button>
  );
};

// ── Proyecto destacado ──────────────────────────────────────────────────────
// Último proyecto publicado: se muestra en la card "Último proyecto" del bento.
const FEATURED_PROJECT = {
  name: "Construcciones Sostenibles",
  tagline: "Landing page · Astro + Tailwind CSS",
  url: "https://github.com/m1gang/construcsostenibles-landingpage",
  demo: "https://www.construcciones-sostenibles.com/",
};

// ── HomePortada ───────────────────────────────────────────────────────────────
const HomePortada = () => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:min-h-0 lg:overflow-hidden font-clash">
      <section className="w-full h-auto lg:h-full bento-section rounded-md text-white">
        {/* ── BENTO GRID ─────────────────────────────────────────────────────── */}
        <div
          className="grid gap-4 h-auto lg:h-full
                      grid-cols-1
                      md:grid-cols-4
                      lg:grid-cols-6 lg:min-h-0 lg:grid-rows-[repeat(2,minmax(0,1.15fr))_repeat(2,minmax(0,1.10fr))_minmax(0,1.05fr)_minmax(0,1.3fr)]
                      pb-4 lg:pb-0"
        >
          {/* 1. FOTO DE PERFIL
               sm: order-2  md: [1-2, row2]  lg: [1-2, rows1-2] */}
          <div
            className="magic-card card-glass flex min-h-0 justify-center overflow-hidden p-2 font-roboto
                        order-2
                        md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-2
                        lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1"
          >
            <img src={profile} alt="profile-migang" className="h-full w-full object-contain" />
          </div>

          {/* 2. PRESENTACIÓN
               sm: order-1  md: [1-4, row1]  lg: [3-6, rows1-2] */}
          <div
            className="magic-card card-glass flex min-h-0 flex-col items-center justify-center gap-1 overflow-hidden px-4 py-3 font-roboto
                        order-1
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-1
                        lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-1"
          >
            <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-2xl lg:text-3xl">
              Hola soy
              <span className="relative flex items-center gap-2">
                {/* Resplandor pastel: conserva el acento de color del antiguo texto degradado */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-6 -inset-y-3 rounded-full bg-[radial-gradient(closest-side,rgba(254,228,230,0.22),rgba(206,251,241,0.12),transparent)] blur-xl"
                />
                <MigangIsotipo
                  width={41}
                  height={32}
                  className="h-8 w-auto lg:h-11"
                  fill="white"
                  aria-hidden="true"
                />
                <MigangLogotipo
                  width={131}
                  height={32}
                  className="h-8 w-auto lg:h-11"
                  fill="white"
                  aria-hidden="true"
                />
              </span>
            </h2>
            <h2 className="w-fit inline-block px-3 my-1 bg-white rounded-full font-medium text-black text-[19px]">
              &lt;Ingeniero de Sistemas &amp; Frontend Developer/&gt;
            </h2>
            <p className="max-w-[62ch] text-center text-lg font-thin">
              "Me especializo en construir experiencias digitales que no solo
              funcionan, sino que comunican y fluyen."
            </p>
          </div>

          {/* 3. ESTADÍSTICAS
               sm: order-3  md: [1-2, row3]  lg: [1-2, rows3-4] */}
          <div
            className="magic-card card-glass shadow-lg min-h-0 overflow-hidden p-5 font-roboto
                        order-3
                        md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-3
                        lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full w-full">
              <div className="flex min-h-0 flex-col items-center justify-center gap-1.5 px-1 text-center">
                <p className="text-6xl leading-none text-red-600 font-sawbones">+17</p>
                <span className="flex flex-wrap items-center justify-center gap-1.5 text-lg leading-tight">
                  <ProyectosIcon width={20} height={20} />
                  Proyectos
                </span>
              </div>
              <div className="flex min-h-0 flex-col items-center justify-center gap-1.5 px-1 text-center">
                <p className="text-6xl leading-none text-red-600 font-sawbones">+3</p>
                <span className="flex flex-wrap items-center justify-center gap-1.5 text-lg leading-tight">
                  <CertificacionIcon width={20} height={20} />
                  Certificaciones
                </span>
              </div>
              <div className="flex min-h-0 flex-col items-center justify-center gap-1.5 px-1 text-center">
                <p className="text-6xl leading-none text-red-600 font-sawbones">3</p>
                <span className="flex flex-wrap items-center justify-center gap-1.5 text-lg leading-tight">
                  <ExperienciaLaboralIcon width={20} height={20} />
                  Experiencias
                </span>
              </div>
              <div className="flex min-h-0 flex-col items-center justify-center gap-1.5 px-1 text-center">
                <p className="text-[50px] leading-none text-red-600 font-sawbones">+1 año</p>
                <span className="flex flex-wrap items-center justify-center gap-1.5 text-lg leading-tight">
                  <ExperienciaIcon width={20} height={20} />
                  Trayectoria
                </span>
              </div>
            </div>
          </div>

          {/* 4. SKILLS
               sm: order-4  md: [3-4, rows2-3]  lg: [3-4, rows3-5] */}
          <div
            className="magic-card card-glass min-h-0 overflow-hidden font-roboto
                        order-4
                        md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-2
                        lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-3"
          >
            <div className="grid grid-cols-2 grid-rows-3 p-4 gap-2 h-full w-full">
              {[
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
              ].map(({ Icon, title, subtitle, chip, textGradient }) => (
                <div
                  key={subtitle}
                  className="flex min-h-0 flex-col items-center justify-center gap-1.5 rounded-2xl text-2xl"
                >
                  <div className="flex gap-2 justify-center items-center text-lg leading-snug text-center">
                    <Icon width={26} height={26} />
                    <span
                      style={{
                        backgroundImage: textGradient,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {title}
                    </span>
                  </div>
                  <p className={`text-xs ${chip} rounded px-1.5 py-0.5 font-thin`}>
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. TECNOLOGÍAS (badges)
               sm: order-5  md: [1-4, row4]  lg: [5-6, rows3-4] */}
          <div
            className="magic-card card-glass flex min-h-0 flex-col overflow-hidden font-roboto
                        order-5
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-4
                        lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-3"
          >
            <div className="flex flex-wrap justify-center items-center p-4 grow font-sawbones text-lg">
              {[
                { Icon: ReactIcon, label: "React" },
                { Icon: TailwindIcon, label: "Tailwind" },
                { Icon: ViteIcon, label: "Vite" },
                { Icon: JavascriptIcon, label: "Javascript" },
                { Icon: CssIcon, label: "CSS" },
                { Icon: HtmlIcon, label: "HTML" },
                { Icon: GitIcon, label: "Git" },
                { Icon: GithubIcon, label: "Github" },
                { Icon: FigmaIcon, label: "Figma" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit"
                >
                  <Icon width={20} height={20} />
                  <span className="text-base">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. BOTONES DE ACCIÓN */}
          <div
            className="flex min-h-0 flex-col justify-center items-center px-4 py-3 font-roboto w-full
                        order-7
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-6
                        lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-5"
          >
            <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-2 w-full gap-2">
              <GlowButton
                to="/proyectos/landings"
                className="w-full md:flex-1 lg:col-span-2"
                glow="linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))"
                icon={ProjectsButtonIcon}
                label="Ver proyectos"
              />

              <GlowButton
                to="/contacto"
                className="w-full md:flex-1"
                glow="linear-gradient(135deg, rgb(59, 196, 242), rgb(122, 105, 249), rgb(180, 92, 242))"
                icon={ContactButtonIcon}
                label="Contactar"
              />

              <GlowButton
                href="https://www.cvresume.dev/m1gang"
                target="_blank"
                rel="noreferrer"
                className="w-full md:flex-1"
                glow="linear-gradient(135deg, rgb(52, 211, 153), rgb(163, 230, 53), rgb(34, 211, 238))"
                icon={CvButtonIcon}
                label="Ver CV"
              />
            </div>
          </div>

          {/* 6. DISPONIBILIDAD Y CONTACTO DIRECTO
               sm: order-6  md: [1-4, row5]  lg: [1-2, row5] */}
          <div
            className="magic-card card-glass relative flex min-h-0 flex-col justify-center gap-1.5 overflow-hidden px-5 py-4 font-roboto
                        order-6
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-5
                        lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-12 -top-16 size-48 rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.16),transparent)] blur-2xl"
            />
            <div className="relative flex items-center justify-between gap-3">
              <p
                role="status"
                className="flex items-center gap-2.5 text-lg font-semibold leading-tight tracking-tight text-white"
              >
                <span aria-hidden="true" className="relative flex size-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-300" />
                </span>
                Disponible para trabajar
              </p>

              <span className="flex items-center gap-1.5">
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label={`Enviar correo a ${EMAIL}`}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Mail aria-hidden="true" className="size-4" />
                </a>
                <a
                  href="https://github.com/M1GaNg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir mi perfil de GitHub en una pestaña nueva"
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Github aria-hidden="true" className="size-4" />
                </a>
              </span>
            </div>
            <p className="relative flex items-center gap-2 pl-[20px] text-[13px] leading-snug text-white/70">
              <MapPin aria-hidden="true" className="size-4 shrink-0 text-white/45" />
              {LOCATION_LABEL}
            </p>
          </div>

          {/* 8. CONTRIBUCIONES GITHUB
               sm: order-8  md: [1-4, auto]  lg: [1-4, row6] */}
          <div
            className="magic-card card-glass flex min-h-0 flex-col justify-center overflow-hidden px-4 py-2 font-roboto
                        order-8
                        md:col-span-4 md:col-start-1
                        lg:col-span-4 lg:row-span-1 lg:col-start-1 lg:row-start-6"
          >
            <a
              href="https://github.com/M1GaNg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de GitHub de M1GaNg"
              className="block w-full overflow-x-auto rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <GitHubCalendar
                username="M1GaNg"
                colorScheme="dark"
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                blockSize={10}
                blockMargin={3}
                fontSize={11}
                showColorLegend={false}
                labels={{
                  months: [
                    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
                    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
                  ],
                  weekdays: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                  totalCount: "{{count}} contribuciones en el último año",
                  legend: { less: "Menos", more: "Más" },
                }}
              />
            </a>
          </div>

          {/* 9. PROYECTO DESTACADO
               sm: order-9  md: [1-4, auto]  lg: [5-6, row6] */}
          <div
            className="magic-card card-glass flex min-h-0 flex-col justify-center gap-1.5 overflow-hidden px-4 py-3 font-roboto
                        order-9
                        md:col-span-4 md:col-start-1
                        lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-6"
          >
            <div className="flex min-h-0 flex-1 items-center gap-3">
              <img
                src={featuredProjectImg}
                alt="Vista previa de la landing page Construcciones Sostenibles"
                className="w-24 shrink-0 self-stretch rounded-lg border border-white/10 object-cover object-top"
              />
              <span className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
                <span className="px-1 text-[13px] font-medium leading-tight text-white/55">
                  Último proyecto
                </span>
                <span className="truncate px-1 text-lg font-semibold leading-tight tracking-tight text-white">
                  {FEATURED_PROJECT.name}
                </span>
                <span className="truncate px-1 text-[13px] leading-snug text-white/70">
                  {FEATURED_PROJECT.tagline}
                </span>
              </span>
              <span className="flex shrink-0 flex-col items-center gap-1.5">
                <a
                  href={FEATURED_PROJECT.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir demo de ${FEATURED_PROJECT.name}`}
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
                <a
                  href={FEATURED_PROJECT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ${FEATURED_PROJECT.name} en GitHub`}
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Github aria-hidden="true" className="size-4" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePortada;
