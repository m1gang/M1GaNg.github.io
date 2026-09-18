import { Link } from "react-router";
import { useEffect, useState } from "react";
import { GitCommitHorizontal } from "lucide-react";
import profile from "../assets/img/migang-pics.webp";
import GradientText from "../components/GradientText";
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
//  │ CONTRIBUCIONES (GitHub) [1-4, row6] │ ACTIVIDAD    │
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

// ── Actividad reciente en GitHub ──────────────────────────────────────────────
// PushEvents públicos de M1GaNg, con caché de 1h en localStorage para no quemar
// el rate limit anónimo de la API (60 req/h). Falla de forma independiente.
const ACTIVITY_CACHE_KEY = "m1gang-github-activity";
const ACTIVITY_TTL = 60 * 60 * 1000;

const timeAgo = (iso) => {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return "ahora mismo";
  if (mins < 60) return `hace ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `hace ${hours} h`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `hace ${days} d`;
  const months = Math.floor(days / 30);
  return `hace ${months} mes${months > 1 ? "es" : ""}`;
};

const fetchRecentActivity = async () => {
  try {
    const raw = localStorage.getItem(ACTIVITY_CACHE_KEY);
    if (raw) {
      const { at, items } = JSON.parse(raw);
      if (Date.now() - at < ACTIVITY_TTL) return items;
    }
  } catch {
    /* almacenamiento no disponible: seguir a la red */
  }
  const res = await fetch("https://api.github.com/users/M1GaNg/events/public");
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const events = await res.json();
  const items = events
    .filter((e) => e.type === "PushEvent")
    .flatMap((e) =>
      (e.payload.commits || []).map((c) => ({
        repo: e.repo.name.replace("M1GaNg/", ""),
        message: c.message.split("\n")[0],
        date: e.created_at,
        url: `https://github.com/${e.repo.name}/commit/${c.sha}`,
      })),
    )
    .slice(0, 4);
  try {
    localStorage.setItem(
      ACTIVITY_CACHE_KEY,
      JSON.stringify({ at: Date.now(), items }),
    );
  } catch {
    /* almacenamiento no disponible: omitir caché */
  }
  return items;
};

const RecentActivity = () => {
  const [state, setState] = useState({ status: "loading", items: [] });

  useEffect(() => {
    let alive = true;
    fetchRecentActivity()
      .then((items) => {
        if (alive) setState({ status: "ready", items });
      })
      .catch(() => {
        if (alive) setState({ status: "error", items: [] });
      });
    return () => {
      alive = false;
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div className="flex flex-col gap-2" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-8 animate-pulse rounded-lg bg-white/5"
          />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <p className="text-sm text-white/45">
        No se pudo cargar la actividad de GitHub.
      </p>
    );
  }

  if (state.items.length === 0) {
    return (
      <p className="text-sm text-white/45">Sin pushes recientes.</p>
    );
  }

  return (
    <ul className="flex min-h-0 flex-col justify-center gap-1">
      {state.items.map((item) => (
        <li key={item.url} className="min-w-0">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.repo}: ${item.message}`}
            className="group flex items-center gap-2.5 rounded-xl px-2 py-1 transition-colors hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <GitCommitHorizontal
              aria-hidden="true"
              className="size-4 shrink-0 text-emerald-300/80 transition-colors group-hover:text-emerald-200"
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium leading-snug text-white">
                {item.message}
              </span>
              <span className="block truncate text-xs leading-tight text-white/45">
                {item.repo} · {timeAgo(item.date)}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
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
                      lg:grid-cols-6 lg:grid-rows-6
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
                <p className="text-[50px] text-red-600 font-sawbones">+1 año</p>
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
              {[
                {
                  Icon: CodeIcon,
                  title: (<>Desarrollo <br /> web</>),
                  subtitle: "Front end con React",
                  chip: "bg-[#8b8afd]/10",
                  textGradient: "linear-gradient(135deg, #00C6FB, #005BEA, #C73AC9)",
                },
                {
                  Icon: SupportIcon,
                  title: (<>Soporte <br /> Técnico</>),
                  subtitle: "Optimización",
                  chip: "bg-[#343d4e]/10",
                  textGradient: "linear-gradient(135deg, #FFF4E4, #F0F6EE, #E7F0F0)",
                },
                {
                  Icon: DesignIcon,
                  title: (<>Diseño <br /> gráfico</>),
                  subtitle: "Corel, Branding",
                  chip: "bg-[#cc1b75]/10",
                  textGradient: "linear-gradient(135deg, #F2A968, #CA1462, #8A2A86)",
                },
                {
                  Icon: LearningIcon,
                  title: (<>Aprendizaje <br /> continuo</>),
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
                  className="flex flex-col items-center justify-center text-2xl gap-2 rounded-2xl"
                >
                  <div className="flex gap-2 justify-center items-center text-lg text-center">
                    <Icon width={30} height={30} />
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
                  <p className={`text-[15px] ${chip} rounded p-1 font-thin`}>
                    {subtitle}
                  </p>
                </div>
              ))}
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
            className="flex flex-col justify-center items-center p-4 font-roboto w-full
                        order-7
                        md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-6
                        lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-5"
          >
            <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-2 w-full gap-3">
              <GlowButton
                to="/proyectos/miniapps"
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

          {/* 8. CONTRIBUCIONES GITHUB
               sm: order-8  md: [1-4, auto]  lg: [1-4, row6] */}
          <div
            className="magic-card card-glass flex flex-col justify-center px-4 py-3 font-roboto
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
                blockSize={11}
                blockMargin={4}
                fontSize={12}
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

          {/* 9. ACTIVIDAD RECIENTE (GitHub)
               sm: order-9  md: [1-4, auto]  lg: [5-6, row6] */}
          <div
            className="magic-card card-glass flex min-h-0 flex-col justify-center gap-1 overflow-hidden px-4 py-3 font-roboto
                        order-9
                        md:col-span-4 md:col-start-1
                        lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-6"
          >
            <p className="shrink-0 px-2 text-[13px] font-medium text-white/55">
              Actividad reciente
            </p>
            <RecentActivity />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePortada;
