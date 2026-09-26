import { useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/motion";
import { ExternalLink, Gamepad2, Palette, Dribbble, MapPin, Clock, BriefcaseBusiness, Code2, Eye, Users } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { LOCATION_LABEL } from "../constants/contact";
import profile from "../assets/img/about.webp";
import { SongCarouselCard } from "../components/SongCarouselCard";
import { useDeezerArtists } from "../hooks/useDeezer";
import { slotOffsets, coverTransform, coverMaskStyle } from "../lib/coverflow";

// Degradados para íconos/títulos de hobbies (mismo estilo que las skills de la portada)
const HOBBY_GRADIENTS = [
  "linear-gradient(135deg, #8b8afd, #C73AC9)", // Gaming
  "linear-gradient(135deg, #F2A968, #CA1462)", // Diseño
  "linear-gradient(135deg, #FFD666, #FF8A00)", // Basketball
];

const HOBBIES = [
  { Icon: Gamepad2, label: "Gaming", subtitle: "Dirección artística" },
  { Icon: Palette, label: "Diseño", subtitle: "Tipografía & UI" },
  { Icon: Dribbble, label: "Basketball", subtitle: "Equipo & ritmo" },
];

// Puesto objetivo — titular del CV, con los roles que lo respaldan.
const ROLE = {
  title: "Frontend Developer",
  level: "Junior",
  support: ["Soporte técnico", "Operaciones y logística"],
};

// Trayectoria — resumen cronológico; el detalle vive en las páginas de Experiencia.
const MILESTONES = [
  { year: "2018–2023", label: "Ing. de Sistemas · UNCP" },
  { year: "2023–2024", label: "Desarrollo web & Soporte" },
  { year: "2024–2025", label: "Almacén & Logística" },
  { year: "2026–hoy", label: "React Jr & Líder Frontend" },
];

const WORKING_PRINCIPLES = [
  {
    Icon: Code2,
    title: "Código Limpio y Modular",
    description: "Componentes reutilizables, estructura predecible y buenas prácticas con foco en mantenibilidad.",
    gradient: "linear-gradient(135deg, #22C55E, #06B6D4)",
    gradientId: "principle-code",
  },
  {
    Icon: Eye,
    title: "Detalle Visual & UX",
    description: "Cuidado riguroso del espaciado, jerarquía tipográfica, estados responsivos y accesibilidad.",
    gradient: "linear-gradient(135deg, #FB923C, #DB2777)",
    gradientId: "principle-ux",
  },
  {
    Icon: Users,
    title: "Adaptabilidad y Equipo",
    description: "Comunicación fluida, compromiso con plazos y disposición constante para aprender nuevas tecnologías.",
    gradient: "linear-gradient(135deg, #A78BFA, #38BDF8)",
    gradientId: "principle-team",
  },
];

const ProfileAbout = () => {
  const { artists, status } = useDeezerArtists();
  const [activeArtist, setActiveArtist] = useState(0);
  const reduce = useReducedMotion();
  const offsets = slotOffsets(artists.length, activeArtist);
  const spring = reduce
    ? { duration: 0 }
    : { type: "spring", stiffness: 320, damping: 34, mass: 0.8 };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:h-screen lg:min-h-0 lg:overflow-y-auto font-clash">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full">
        {/* Card 1 (pos 1): Nombre + Bio — cols 1-6 / rows 1-2 */}
        <MagicCard className="min-h-[10rem] lg:min-h-0 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:row-span-2 card-glass flex flex-col justify-center p-5 font-roboto gap-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <h2 className="text-base lg:text-lg font-bold text-white tracking-tight">
              Miguel Ángel Yapias Veli
            </h2>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-medium tracking-wider uppercase border border-white/10">
              MiGaNg
            </span>
          </div>
          <p className="max-w-[65ch] text-[14px] lg:text-[14.5px] leading-relaxed text-white/75">
            <span className="font-medium text-white">
              Bachiller en Ingeniería de Sistemas con experiencia en desarrollo web Frontend (React, JavaScript, HTML, CSS),
              soporte técnico y operaciones de almacén y logística.
            </span>{" "}
            Me caracterizo por la responsabilidad, la atención al detalle y la capacidad de adaptación. Busco consolidarme
            como Frontend Developer mientras aporto valor en entornos técnicos y operativos.
          </p>
        </MagicCard>

        {/* Pos 3 (cols 7-8 / rows 1-2): Puesto objetivo */}
        <MagicCard className="hidden md:flex lg:col-start-7 lg:col-span-2 lg:row-start-1 lg:row-span-2 card-glass p-4 font-roboto flex flex-col justify-center">
          <svg width="0" height="0" className="absolute w-0 h-0" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="location-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#34D399" /><stop offset="100%" stopColor="#60A5FA" /></linearGradient>
              <linearGradient id="role-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#F472B6" /><stop offset="100%" stopColor="#818CF8" /></linearGradient>
            </defs>
          </svg>
          <div className="flex min-h-0 flex-1 flex-col justify-center gap-4">
            <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-2.5">
              <span className="grid size-6 place-items-center" style={{ stroke: "url(#role-gradient)" }}>
                <BriefcaseBusiness size={18} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <div className="min-w-0 leading-tight">
                <p className="truncate text-[14px] font-bold text-white">{ROLE.title}</p>
                <p className="mt-0.5 text-[11px] text-white/45">{ROLE.level}</p>
              </div>
            </div>

            <div className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-2.5">
              <span className="grid size-6 place-items-center" style={{ stroke: "url(#location-gradient)" }}>
                <MapPin size={17} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <p className="text-[12px] font-medium leading-relaxed text-white/80">{LOCATION_LABEL}</p>
            </div>

            <div className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-2.5">
              <span className="grid size-6 place-items-center text-white/45">
                <Clock size={15} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <p className="text-[11px] leading-relaxed text-white/45">Disponible para trabajo remoto o presencial</p>
            </div>
          </div>
        </MagicCard>

        {/* Pos 8 (cols 9-12 / row 1): Trayectoria en una línea de tiempo */}
        <MagicCard className="hidden md:flex lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-1 card-glass px-4 py-3 font-roboto items-center">
          <ol className="relative grid w-full grid-cols-4 gap-2">
            {/* Línea que une los hitos */}
            <span
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-[3.5px] h-px bg-white/15"
            />
            {MILESTONES.map((milestone) => (
              <li
                key={milestone.year}
                className="relative flex flex-col items-center gap-1.5 text-center min-w-0"
              >
                <span className="size-2 rounded-full bg-white/60 ring-4 ring-white/5" aria-hidden="true" />
                <span className="text-[11px] font-semibold tabular-nums text-white/90 leading-none">
                  {milestone.year}
                </span>
                <span className="text-[10px] leading-tight text-white/45 line-clamp-2">
                  {milestone.label}
                </span>
              </li>
            ))}
          </ol>
        </MagicCard>

        {/* Card 2 (pos 2): Foto Central — cols 5-8 / rows 3-4 */}
        <MagicCard className="min-h-[18rem] lg:min-h-0 lg:col-start-5 lg:col-span-4 lg:row-start-3 lg:row-span-2 card-glass p-1.5">
          <img
            src={profile}
            alt="Foto de perfil de Miguel Ángel"
            className="h-full w-full rounded-[19px] object-cover object-center"
            decoding="async"
          />
        </MagicCard>

        {/* Artistas Favoritos (pos 5): coverflow — cols 9-12 / rows 2-3 */}
        <MagicCard className="min-h-[10rem] lg:min-h-0 lg:col-start-9 lg:col-span-4 lg:row-start-2 lg:row-span-2 card-glass p-4 font-roboto flex flex-col justify-center gap-3">
          <div className="relative h-[112px] shrink-0 overflow-hidden" style={coverMaskStyle}>
            {status === "loading"
              ? [0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-[92px] h-[92px] rounded-xl animate-pulse motion-reduce:animate-none bg-white/10"
                    style={{
                      marginLeft: -46 + (i - 1) * 70,
                      marginTop: -46,
                      transform: i === 1 ? "scale(1.3)" : "scale(0.85)",
                      zIndex: i === 1 ? 10 : 5,
                    }}
                  />
                ))
              : artists.map((artist, idx) => {
                  const offset = offsets[idx] ?? 99;
                  const isActive = offset === 0;
                  const { x, scale, dim, opacity, zIndex } = coverTransform(offset, 70);
                  if (Math.abs(offset) > 3) return null;
                  const Wrapper = isActive && artist.link ? "a" : "button";

                  return (
                    <motion.div
                      key={artist.name}
                      initial={false}
                      animate={{ x, scale, opacity }}
                      transition={spring}
                      style={{ marginLeft: -46, marginTop: -46, zIndex }}
                      className="absolute top-1/2 left-1/2"
                    >
                      <Wrapper
                        {...(Wrapper === "a"
                          ? { href: artist.link, target: "_blank", rel: "noopener noreferrer" }
                          : { type: "button", onClick: () => setActiveArtist(idx) })}
                        aria-label={isActive ? `Abrir a ${artist.name} en Deezer` : `Ver ${artist.name}`}
                        className={`group block relative w-[92px] h-[92px] rounded-xl overflow-hidden bg-white/5 transition-shadow ${
                          isActive
                            ? "border-[3px] border-white shadow-[0_18px_36px_-10px_rgba(0,0,0,0.8)]"
                            : "border border-white/10 hover:border-white/30"
                        }`}
                      >
                        {artist.picture ? (
                          <img
                            src={artist.picture}
                            alt={`Foto de ${artist.name}`}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-white/40 text-lg font-bold">
                            {artist.name.charAt(0)}
                          </div>
                        )}
                        <span
                          className="absolute inset-0 bg-black pointer-events-none"
                          style={{ opacity: dim }}
                        />
                        {isActive && (
                          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-1 pb-1 pt-3 text-center text-[9px] font-semibold text-white leading-tight line-clamp-1 pointer-events-none">
                            {artist.name}
                          </span>
                        )}
                      </Wrapper>
                    </motion.div>
                  );
                })}
          </div>

          {/* Nombre del artista activo + contador (bajo la tira) */}
          <div className="flex shrink-0 items-center justify-between gap-2 border-t border-white/10 pt-2 text-[11px]">
            <span className="text-white/70 font-medium truncate">
              {status === "loading" ? "Cargando artistas..." : artists[activeArtist]?.name}
            </span>
            <span className="text-white/35 tabular-nums shrink-0">
              {activeArtist + 1} / {artists.length}
            </span>
          </div>
        </MagicCard>

        {/* Hobbies (pos 4) — grid 3 columnas con íconos degradados: cols 1-4 / rows 3-4 */}
        <MagicCard className="min-h-[9rem] lg:min-h-0 lg:col-start-1 lg:col-span-4 lg:row-start-3 lg:row-span-2 card-glass p-5 font-roboto flex flex-col justify-between gap-3">
          {/* Defs de degradados para trazo de íconos (referenciados por url(#)) */}
          <svg width="0" height="0" className="absolute w-0 h-0" aria-hidden="true" focusable="false">
            <defs>
              {HOBBY_GRADIENTS.map((gradient, idx) => (
                <linearGradient key={idx} id={`hobby-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={gradient.match(/#[0-9A-Fa-f]{6}/g)?.[0] || "#fff"} />
                  <stop offset="100%" stopColor={gradient.match(/#[0-9A-Fa-f]{6}/g)?.[1] || "#fff"} />
                </linearGradient>
              ))}
            </defs>
          </svg>

          <div className="grid grid-cols-3 gap-2 h-full items-center justify-items-center">
            {HOBBIES.map(({ Icon, label, subtitle }, idx) => (
              <div key={label} className="flex flex-col items-center justify-center gap-2 text-center min-w-0 px-1">
                <Icon
                  size={34}
                  strokeWidth={1.6}
                  style={{ stroke: `url(#hobby-grad-${idx})` }}
                  className="drop-shadow-[0_0_10px_rgba(199,58,201,0.25)]"
                />
                <span
                  className="text-sm font-bold leading-tight"
                  style={{
                    backgroundImage: HOBBY_GRADIENTS[idx],
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {label}
                </span>
                <span className="text-[10px] text-white/45 leading-tight">{subtitle}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-white/40 border-t border-white/10 pt-1.5 text-center">
            Equilibrio entre pensamiento visual, recreación y deporte.
          </p>
        </MagicCard>

        {/* Canciones (pos 6) — coverflow protagonista: cols 9-12 / rows 4-6 */}
        <MagicCard className="min-h-[18rem] lg:min-h-0 lg:col-start-9 lg:col-span-4 lg:row-start-4 lg:row-span-3 card-glass p-4">
          <SongCarouselCard />
        </MagicCard>

        {/* Filosofía de Trabajo (pos 7): cols 1-8 / rows 5-6 */}
        <MagicCard className="min-h-[10rem] lg:min-h-0 lg:col-start-1 lg:col-span-8 lg:row-start-5 lg:row-span-2 card-glass p-5 font-roboto flex flex-col justify-between">
          <svg width="0" height="0" className="absolute w-0 h-0" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="principle-code" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22C55E" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient>
              <linearGradient id="principle-ux" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#FB923C" /><stop offset="100%" stopColor="#DB2777" /></linearGradient>
              <linearGradient id="principle-team" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#A78BFA" /><stop offset="100%" stopColor="#38BDF8" /></linearGradient>
            </defs>
          </svg>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
            {WORKING_PRINCIPLES.map(({ Icon, title, description, gradient, gradientId }) => (
              <div key={title} className="flex min-w-0 flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="grid size-8 shrink-0 place-items-center rounded-lg"
                    style={{ stroke: `url(#${gradientId})` }}
                  >
                    <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h4
                    className="text-xs font-semibold leading-tight"
                    style={{
                      backgroundImage: gradient,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {title}
                  </h4>
                </div>
                <p className="text-[12px] leading-relaxed text-white/65">{description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[11px] text-white/50">
            <span>Objetivo: aportar valor real desde el primer día en proyectos colaborativos.</span>
            <a
              href="https://www.linkedin.com/in/miguel-%C3%A1ngel-yapias-veli-60641b194/?trk=opento_sprofile_goalscard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

export default ProfileAbout;
