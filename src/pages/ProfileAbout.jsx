import { useRef } from "react";
import { motion } from "motion/react";
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
import { GlobalSpotlight } from "../components/GlobalSpotlight";
import about from "../assets/img/about.jpg";
const ProfileAbout = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <GlobalSpotlight gridRef={gridRef} />

      {/* Main Grid Container - Full Height on Desktop */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* --- Top Left: Logo --- */}
        <MagicCard
          className="lg:col-span-3 lg:row-span-2 card-glass p-8 flex flex-col items-center justify-center bg-black border-white/5 font-roboto"
          gradientColor="#262626"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={about}
            alt="MiGaNg Logo"
            className="w-100 h-100 rounded-md drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </MagicCard>

        {/* --- Top Right: Bio --- */}
        <MagicCard
          className="lg:col-span-9 lg:row-span-2 card-glass p-8 lg:p-12 flex items-center bg-[#11111180] border-white/5 font-roboto"
          gradientColor="#262626"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg lg:text-2xl text-white/60 leading-relaxed font-medium italic">
            "Soy Miguel Ángel, aunque muchos me conocen como{" "}
            <span className="text-white font-bold not-italic">MiGaNg</span>. Más
            allá de la programación, me apasiona entender cómo la tecnología
            mejora la vida de las personas. Me gusta aprender explorando nuevas
            herramientas, resolver problemas técnicos y también disfrutar de la
            música como una forma de creatividad."
          </p>
        </MagicCard>

        {/* --- Middle: Traits Strip --- */}
        {/* We can wrap these in individual cards or one big container. 
            The image shows them as separate blocks in a row. 
            Let's use 4 separate MagicCards. */}
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 p-6 flex flex-col items-center justify-center text-center gap-2 bg-[#11111160] font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Lightbulb className="text-orange-400 w-8 h-8 lg:w-10 lg:h-10 fill-orange-400/20 mb-2" />
          <h3 className="text-xl font-bold">💡 Curioso</h3>
          <p className="text-xs text-white/50 leading-relaxed">
            Siempre busco mejorar mis habilidades y aplicar nuevas tecnologías
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 p-6 flex flex-col items-center justify-center text-center gap-2 bg-[#11111160] font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Users className="text-blue-400 w-8 h-8 lg:w-10 lg:h-10 fill-blue-400/20 mb-2" />
          <h3 className="text-xl font-bold">👥 Colaborativo</h3>
          <p className="text-xs text-white/50 leading-relaxed">
            Me gusta trabajar en equipo y aprender de otros
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 p-6 flex flex-col items-center justify-center text-center gap-2 bg-[#11111160] font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Orbit className="text-cyan-400 w-8 h-8 lg:w-10 lg:h-10 mb-2" />
          <h3 className="text-xl font-bold">🎯 Resolutivo</h3>
          <p className="text-xs text-white/50 leading-relaxed">
            Me enfoco en encontrar soluciones prácticas a problemas técnicos
          </p>
        </MagicCard>
        <MagicCard
          className="lg:col-span-3 lg:row-span-1 p-6 flex flex-col items-center justify-center text-center gap-2 bg-[#11111160] font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Medal className="text-yellow-400 w-8 h-8 lg:w-10 lg:h-10 fill-yellow-400/20 mb-2" />
          <h3 className="text-xl font-bold">🎖️ Enfocado</h3>
          <p className="text-xs text-white/50 leading-relaxed">
            Planifico mis objetivos y trabajo de forma organizada
          </p>
        </MagicCard>

        {/* --- Bottom Left: Roadmap --- */}
        <MagicCard
          className="lg:col-span-5 lg:row-span-3 p-8 bg-[#0a0a0a80] flex flex-col justify-center font-roboto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex flex-col gap-4 relative px-2 h-full justify-center">
            {/* Connecting Line */}
            <div className="absolute left-[20px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#00ffd1] via-[#76ff03] to-[#ffc107] flex items-center justify-between flex-col py-1">
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

        {/* --- Bottom Right: Small Traits & Interests --- */}
        {/* Row 4 (part of Bottom Right): Small Traits */}
        <div className="lg:col-span-7 lg:row-span-1 grid grid-cols-3 gap-4">
          <MagicCard className="p-4 bg-[#0a0a0a80] flex flex-col gap-2 justify-center font-roboto">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-white/80" />
              <h4 className="text-sm font-bold">Crecimiento constante</h4>
            </div>
            <p className="text-[11px] text-white/40 italic">
              "Siempre abierto a aprender"
            </p>
          </MagicCard>
          <MagicCard className="p-4 bg-[#0a0a0a80] flex flex-col gap-2 justify-center font-roboto">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-white/80" />
              <h4 className="text-sm font-bold">Atención al detalle</h4>
            </div>
            <p className="text-[11px] text-white/40 italic">
              "Me gusta que las cosas funcionen y se vean bien"
            </p>
          </MagicCard>
          <MagicCard className="p-4 bg-[#0a0a0a80] flex flex-col gap-2 justify-center font-roboto">
            <div className="flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-white/80" />
              <h4 className="text-sm font-bold">Comunidad</h4>
            </div>
            <p className="text-[11px] text-white/40 italic">
              "Creo en compartir conocimiento y trabajar en equipo"
            </p>
          </MagicCard>
        </div>

        {/* Row 5-6 (part of Bottom Right): Interests */}
        <div className="lg:col-span-7 lg:row-span-2 grid grid-cols-4 gap-6">
          <MagicCard className="flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors font-roboto">
            <Music size={32} className="text-white/40" />
            <span className="text-xs font-bold tracking-widest text-white/30 uppercase">
              🎵 Música
            </span>
            <p className="text-[10px] text-center text-white/30 px-2">
              Me inspira, me despeja y me da creatividad
            </p>
          </MagicCard>
          <MagicCard className="flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors font-roboto">
            <Gamepad2 size={32} className="text-white/40" />
            <span className="text-xs font-bold tracking-widest text-white/30 uppercase">
              🎮 Gaming
            </span>
            <p className="text-[10px] text-center text-white/30 px-2">
              Me apasiona jugar y también analizar los juegos desde lo visual
            </p>
          </MagicCard>
          <MagicCard className="flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors font-roboto">
            <Palette size={32} className="text-white/40" />
            <span className="text-xs font-bold tracking-widest text-white/30 uppercase">
              💎 Diseño
            </span>
            <p className="text-[10px] text-center text-white/30 px-2">
              Me atrae el aspecto visual de las interfaces
            </p>
          </MagicCard>
          <MagicCard className="flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors font-roboto">
            <Dribbble size={32} className="text-white/40" />
            <span className="text-xs font-bold tracking-widest text-white/30 uppercase">
              🏀 Basketball
            </span>
            <p className="text-[10px] text-center text-white/30 px-2">
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
