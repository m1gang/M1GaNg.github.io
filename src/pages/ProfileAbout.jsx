import { useRef } from "react";
import {
  Lightbulb,
  Users,
  Orbit,
  Medal,
  Rocket,
  Eye,
  UserPlus,
  Music,
  Gamepad2,
  Palette,
  Dribbble,
} from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import about from "../assets/img/about.jpg";
const ProfileAbout = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">


      {/* Main Grid Container - Full Height on Desktop */}
      {/* Main Grid Container - Full Height on Desktop */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-3 h-full w-full"
      >
        {/* --- Top Left: Logo --- */}
        <MagicCard
          className="lg:col-span-4 lg:row-span-2 card-glass p-4 lg:p-8 flex flex-col items-center justify-center bg-[#0a0a0a80] border-white/5 font-roboto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={about}
            alt="MiGaNg Logo"
            className="w-32 md:w-48 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-xl"
          />
        </MagicCard>

        {/* --- Top Right: Bio --- */}
        <MagicCard
          className="lg:col-span-8 lg:row-span-2 card-glass p-6 lg:p-10 flex items-center bg-[#0a0a0a80] border-white/5 font-roboto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm md:text-base lg:text-[1.1rem] text-white/70 leading-relaxed lg:leading-[1.8] font-medium text-center lg:px-8">
            "Soy Miguel Ángel, aunque muchos me conocen como{" "}
            <span className="text-white font-bold">MiGaNg</span>. Más allá de la
            programación, me apasiona entender cómo la tecnología mejora la vida
            de las personas. Me gusta aprender explorando nuevas herramientas,
            resolver problemas técnicos y también disfrutar de la música como
            una forma de creatividad."
          </p>
        </MagicCard>

        {/* --- Middle: Traits Strip (4 cards) --- */}
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 card-glass p-4 flex flex-col items-center justify-center text-center gap-2 bg-[#0a0a0a80] border-white/5 font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">
              💡
            </span>
            <h3 className="text-[17px] font-bold text-white">Curioso</h3>
          </div>
          <p className="text-[11px] text-white/50 leading-tight">
            Siempre busco mejorar mis habilidades y aplicar nuevas tecnologías
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 card-glass p-4 flex flex-col items-center justify-center text-center gap-2 bg-[#0a0a0a80] border-white/5 font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">
              👥
            </span>
            <h3 className="text-[17px] font-bold text-white">Colaborativo</h3>
          </div>
          <p className="text-[11px] text-white/50 leading-tight">
            Disfruto trabajar en equipo y aprender de otros
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 card-glass p-4 flex flex-col items-center justify-center text-center gap-2 bg-[#0a0a0a80] border-white/5 font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
              ⚙️
            </span>
            <h3 className="text-[17px] font-bold text-white">Resolutivo</h3>
          </div>
          <p className="text-[11px] text-white/50 leading-tight">
            Me enfoco en encontrar soluciones prácticas a problemas técnicos
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 card-glass p-4 flex flex-col items-center justify-center text-center gap-2 bg-[#0a0a0a80] border-white/5 font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">
              ⭐
            </span>
            <h3 className="text-[17px] font-bold text-white">Enfocado</h3>
          </div>
          <p className="text-[11px] text-white/50 leading-tight">
            Planifico mis objetivos y trabajo de forma organizada
          </p>
        </MagicCard>

        {/* --- Bottom Left: Roadmap --- */}
        <MagicCard
          className="lg:col-span-5 lg:row-span-3 card-glass p-6 md:p-8 bg-[#0a0a0a80] border-white/5 flex flex-col justify-center font-roboto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex flex-col gap-5 md:gap-8 relative px-2">
            {/* Connecting Line */}
            <div className="absolute left-[20px] top-4 md:top-6 bottom-4 md:bottom-6 w-[2px] bg-gradient-to-b from-[#00ffd1] via-[#76ff03] to-[#ffc107] flex items-center justify-between flex-col py-1">
              <div className="w-1.5 h-1.5 border-t-2 border-l-2 border-[#00ffd1]/60 -rotate-45 -mt-1 ml-[-2px]"></div>
              <div className="w-1.5 h-1.5 border-b-2 border-r-2 border-[#ffc107]/60 -rotate-45 -mb-1 ml-[-2px]"></div>
            </div>

            <RoadmapItem
              label="ACTUAL"
              bgColor="bg-[#00ffd1]"
              text="Fortalecer mi perfil en desarrollo web con proyectos prácticos."
            />
            <RoadmapItem
              label="PROXIMO PASO"
              bgColor="bg-[#76ff03]"
              text="Incorporarme a un equipo como desarrollador frontend o en soporte IT."
            />
            <RoadmapItem
              label="FUTURO"
              bgColor="bg-[#ffc107]"
              text="Especializarme en tecnologías modernas y contribuir en proyectos escalables."
            />
          </div>
        </MagicCard>

        {/* --- Bottom Right: Nested Grid --- */}
        <div className="lg:col-span-7 lg:row-span-3 grid grid-cols-12 grid-rows-3 gap-3">
          {/* Row 1/3 (Small Traits) */}
          <MagicCard className="col-span-12 md:col-span-4 row-span-1 card-glass p-4 bg-[#0a0a0a80] border-white/5 flex flex-col gap-1 justify-center items-center text-center font-roboto">
            <div className="flex items-center gap-1.5">
              <Rocket className="w-4 h-4 text-white" />
              <h4 className="text-sm font-bold text-white">
                Crecimiento constante
              </h4>
            </div>
            <p className="text-[10px] text-white/50 italic mt-1 leading-tight">
              "Siempre abierto a aprender"
            </p>
          </MagicCard>
          <MagicCard className="col-span-12 md:col-span-4 row-span-1 card-glass p-4 bg-[#0a0a0a80] border-white/5 flex flex-col gap-1 justify-center items-center text-center font-roboto">
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-white" />
              <h4 className="text-sm font-bold text-white">
                Atención al detalle
              </h4>
            </div>
            <p className="text-[10px] text-white/50 italic mt-1 leading-tight">
              "Me gusta que las cosas funcionen y se vean bien"
            </p>
          </MagicCard>
          <MagicCard className="col-span-12 md:col-span-4 row-span-1 card-glass p-4 bg-[#0a0a0a80] border-white/5 flex flex-col gap-1 justify-center items-center text-center font-roboto">
            <div className="flex items-center gap-1.5">
              <UserPlus className="w-4 h-4 text-white" />
              <h4 className="text-sm font-bold text-white">Comunidad</h4>
            </div>
            <p className="text-[10px] text-white/50 italic mt-1 leading-tight">
              "Creo en compartir conocimiento y trabajar en equipo"
            </p>
          </MagicCard>

          {/* Row 2/3 & 3/3 (Interests/Hobbies) */}
          <MagicCard className="col-span-6 md:col-span-3 row-span-2 card-glass p-3 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors font-roboto">
            <Music size={26} className="text-white mb-1" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Música
            </span>
            <p className="text-[10px] text-center text-white/60 leading-tight">
              Me inspira, me despeja y me da creatividad
            </p>
          </MagicCard>
          <MagicCard className="col-span-6 md:col-span-3 row-span-2 card-glass p-3 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors font-roboto">
            <Gamepad2 size={26} className="text-white mb-1" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Gaming
            </span>
            <p className="text-[10px] text-center text-white/60 leading-tight">
              Me apasiona jugar y también analizar los juegos desde lo visual
            </p>
          </MagicCard>
          <MagicCard className="col-span-6 md:col-span-3 row-span-2 card-glass p-3 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors font-roboto">
            <Palette size={26} className="text-white mb-1" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Diseño
            </span>
            <p className="text-[10px] text-center text-white/60 leading-tight">
              Me atrae el aspecto visual de las interfaces
            </p>
          </MagicCard>
          <MagicCard className="col-span-6 md:col-span-3 row-span-2 card-glass p-3 bg-[#0a0a0a80] border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors font-roboto">
            <Dribbble size={26} className="text-white mb-1" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Basketball
            </span>
            <p className="text-[10px] text-center text-white/60 leading-tight">
              Me enseña disciplina, trabajo en equipo y estrategia
            </p>
          </MagicCard>
        </div>
      </div>
    </div>
  );
};

const RoadmapItem = ({ label, bgColor, text }) => (
  <div className="flex gap-6 items-center z-10">
    <div
      className={`min-w-[12px] h-[12px] rounded-full ${bgColor} shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
    ></div>
    <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-6 flex-1">
      <span
        className={`${bgColor} text-black text-xs font-black px-3 py-1 rounded w-fit min-w-[100px] text-center tracking-tighter`}
      >
        {label}
      </span>
      <p className="text-sm lg:text-[15px] font-bold text-white leading-tight">
        {text}
      </p>
    </div>
  </div>
);

export default ProfileAbout;
