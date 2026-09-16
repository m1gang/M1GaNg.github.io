import { Link } from "react-router";
import profile from "../assets/img/profile.webp";
import GradientText from "../components/GradientText";
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
import ProjectsIcon from "../components/icons/custom/projects.svg?react";
import ContactarIcon from "../components/icons/custom/contactar.svg?react";
import CvIcon from "../components/icons/custom/cv.svg?react";
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

// ─── Grid layout (6 cols × 5 rows en lg, 4 cols en md, 1 col en sm) ──────────
//
//  lg (6×5):
//  ┌──────────┬──────────────────────────┐
//  │ FOTO     │ PRESENTACIÓN             │
//  │ [1-2,1-2]│ [3-6,1-2]               │
//  ├──────────┼───────────┬──────────────┤
//  │ STATS    │ SKILLS    │ TECHS        │
//  │ [1-2,3-4]│ [3-4,3-5] │ [5-6,3-4]  │
//  ├──────────┴───────────┼──────────────┤
//  │ LOGO                 │ BOTONES      │
//  │ [1-2,5]              │ [5-6,5]      │
//  └──────────────────────┴──────────────┘
//
//  md (4×auto): cada card ocupa filas/columnas definidas abajo
//               BOTONES en md → row horizontal (flex-row)
//  sm: columna única, misma dirección que lg (flex-col)

// ── GlowButton ────────────────────────────────────────────────────────────────
// Botón con borde degradado animado. Acepta `href` para renderizar como <a>.
const GlowButton = ({ href, to, target, rel, children, className = "" }) => {
  const glowStyle = {
    background: "linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))",
  };

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
        style={{ animation: "10s ease-in-out 0s infinite alternate none running border-glow-translate" }}
      >
        <span
          className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
          style={{
            animation: "10s ease-in-out 0s infinite alternate none running border-glow-scale",
            ...glowStyle,
          }}
        />
      </span>

      {/* Contenido centrado sobre fondo oscuro */}
          <span className="flex items-center justify-center gap-2 relative z-[1] bg-neutral-950/90 rounded-full py-2.5 px-5 w-full h-full">
        {children}
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

// ── HomePortada ───────────────────────────────────────────────────────────────
const HomePortada = () => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <section className="w-full h-auto lg:h-full bento-section rounded-md text-white">

        {/* ── BENTO GRID ─────────────────────────────────────────────────────── */}
        <div
          className="grid gap-4 h-auto lg:h-full
                      grid-cols-1
                      md:grid-cols-4
                      lg:grid-cols-6 lg:grid-rows-5
                      pb-4 lg:pb-0"
        >

          {/* 1. FOTO DE PERFIL
               sm: order-2  md: [1-2, row2]  lg: [1-2, rows1-2] */}
          <div
            className="magic-card card-glass flex justify-center p-2 font-roboto
                        order-2
                        md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-2
                        lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1"
          >
            <img src={profile} alt="profile-migang" />
          </div>

          {/* 2. PRESENTACIÓN
               sm: order-1  md: [1-4, row1]  lg: [3-6, rows1-2] */}
          <div
            className="magic-card card-glass flex flex-col justify-center items-center font-roboto
                        order-1
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-1
                        lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-1"
          >
            <h2 className="text-4xl flex gap-3 items-baseline">
              Hola soy
              <GradientText
                colors={["#FEE4E6", "#E6EFEB", "#CEFBF1"]}
                className="text-7xl font-bold"
              >
                MiGaNg
              </GradientText>
            </h2>
            <h2 className="w-fit inline-block px-3 my-2 bg-white rounded-full font-medium text-black text-[20px]">
              &lt;Ingeniero de Sistemas &amp; Frontend Developer/&gt;
            </h2>
            <p className="font-thin text-xl text-center">
              "Me especializo en construir experiencias digitales que no solo
              funcionan, sino que comunican y fluyen."
            </p>
          </div>

          {/* 3. ESTADÍSTICAS
               sm: order-3  md: [1-2, row3]  lg: [1-2, rows3-4] */}
          <div
            className="magic-card card-glass shadow-lg p-6 font-roboto
                        order-3
                        md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-3
                        lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
              <div className="flex flex-col items-center justify-center">
                <p className="text-6xl text-red-600 font-sawbones">+15</p>
                <span className="flex text-xl gap-3">
                  <ProyectosIcon width={24} height={24} />
                  Proyectos
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-6xl text-red-600 font-sawbones">+3</p>
                <span className="flex text-xl gap-3">
                  <CertificacionIcon width={24} height={24} />
                  Certificaciones
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-6xl text-red-600 font-sawbones">2</p>
                <span className="flex items-center text-xl gap-3">
                  <ExperienciaLaboralIcon width={24} height={24} />
                  Empresas
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[50px] text-red-600 font-sawbones">
                  +1 año
                </p>
                <span className="flex text-xl gap-3">
                  <ExperienciaIcon width={24} height={24} />
                  Experiencia
                </span>
              </div>
            </div>
          </div>

          {/* 4. SKILLS
               sm: order-4  md: [3-4, rows2-3]  lg: [3-4, rows3-5] */}
          <div
            className="magic-card card-glass font-roboto
                        order-4
                        md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-2
                        lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-3"
          >
            <div className="grid grid-cols-2 grid-rows-3 p-4 gap-2 h-full w-full">
              <div className="flex flex-col items-center justify-center text-2xl gap-2 rounded-2xl">
                <div className="flex gap-2 justify-center items-center text-xl text-center">
                  <CodeIcon width={30} height={30} />
                  Desarrollo <br /> web
                </div>
                <p className="text-[15px] bg-[#8b8afd]/10 rounded p-1 font-thin">
                  Front end con React
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 rounded-2xl">
                <div className="flex gap-2 justify-center items-center text-lg">
                  <SupportIcon width={30} height={30} />
                  Soporte <br /> Técnico
                </div>
                <p className="text-[15px] bg-[#343d4e]/10 rounded p-1 font-thin">
                  Optimización
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 rounded-2xl">
                <div className="flex gap-2 justify-center items-center text-lg">
                  <DesignIcon width={30} height={30} />
                  Diseño <br /> gráfico
                </div>
                <p className="text-[15px] bg-[#cc1b75]/10 rounded p-1 font-thin">
                  Corel, Branding
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 rounded-2xl">
                <div className="flex gap-2 justify-center items-center text-lg">
                  <LearningIcon width={30} height={30} />
                  Aprendizaje <br /> continuo
                </div>
                <p className="text-[15px] bg-[#6d6d6d]/10 rounded p-1 font-thin">
                  Siempre aprendiendo
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 rounded-2xl">
                <div className="flex gap-2 justify-center items-center text-lg">
                  <UiUxIcon width={30} height={30} />
                  UI / UX
                </div>
                <p className="text-[15px] bg-[#37d09e]/10 rounded p-1 font-thin">
                  Prototipos
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 rounded-2xl">
                <div className="flex gap-2 justify-center items-center text-lg">
                  <TeamIcon width={30} height={30} />
                  Comunicación
                </div>
                <p className="text-[15px] bg-[#afb1b7]/10 rounded p-1 font-thin">
                  Trabajo en equipo
                </p>
              </div>
            </div>
          </div>

          {/* 5. TECNOLOGÍAS (badges)
               sm: order-5  md: [1-4, row4]  lg: [5-6, rows3-4] */}
          <div
            className="magic-card card-glass flex flex-col font-roboto
                        order-5
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-4
                        lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-3"
          >
            <div className="flex flex-wrap justify-center items-center p-4 grow font-sawbones text-lg">
              {[
                { Icon: ReactIcon,      label: "React" },
                { Icon: TailwindIcon,   label: "Tailwind" },
                { Icon: ViteIcon,       label: "Vite" },
                { Icon: JavascriptIcon, label: "Javascript" },
                { Icon: CssIcon,        label: "CSS" },
                { Icon: HtmlIcon,       label: "HTML" },
                { Icon: GitIcon,        label: "Git" },
                { Icon: GithubIcon,     label: "Github" },
                { Icon: FigmaIcon,      label: "Figma" },
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
            className="flex flex-col justify-center items-center p-4 font-roboto w-full
                        order-7
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-6
                        lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-5"
          >
            <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-2 w-full gap-3">
              <GlowButton to="/proyectos/miniapps" className="w-full md:flex-1 lg:col-span-2">
                <ProjectsIcon width={18} height={18} />
                <span className="text-sm font-medium text-white/90 group-hover:scale-105 transition">
                  Ver proyectos
                </span>
              </GlowButton>

              <GlowButton to="/contacto" className="w-full md:flex-1">
                <ContactarIcon width={18} height={18} />
                <span className="text-sm font-medium text-white/90 group-hover:scale-105 transition">
                  Contactar
                </span>
              </GlowButton>

              <GlowButton href="https://www.cvresume.dev/m1gang" target="_blank" rel="noreferrer" className="w-full md:flex-1">
                <CvIcon width={18} height={18} />
                <span className="text-sm font-medium text-white/90 group-hover:scale-105 transition">
                  Ver CV
                </span>
              </GlowButton>
            </div>
          </div>

          {/* 6. LOGO (isotipo + logotipo)
               sm: order-6  md: [1-4, row5]  lg: [1-2, row5] */}
          <div
            className="magic-card card-glass flex justify-center items-center gap-4 font-roboto
                        order-6
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-5
                        lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-5"
          >
            <MigangIsotipo width={80} height={80} fill="white" />
            <MigangLogotipo width={200} height={200} fill="white" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomePortada;
