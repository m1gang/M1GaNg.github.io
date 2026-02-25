import { useRef } from "react";
import { MapPin, Monitor, FileText, Wrench } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";

const ExperienceCondisa = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <GlobalSpotlight gridRef={gridRef} />

      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Top left - Company Info */}
        <MagicCard
          className="lg:col-span-7 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a1f3a]/40 border-white/5 relative group font-roboto flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-all duration-1000"></div>

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10 w-full h-full">
            {/* Company Logo */}
            <div className="flex justify-center shrink-0 items-center">
              <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <div className="text-white text-sm font-bold mb-1">
                    CONDISA
                  </div>
                  <div className="text-white text-xs">ROMERO</div>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="flex flex-col justify-center gap-2 h-full py-2">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                CONDISA ROMERO S.A.C.
              </h2>
              <div className="flex flex-row gap-4">
                <div className="flex items-center gap-1.5 text-white/70">
                  <MapPin size={14} className="text-blue-400" />
                  <span className="text-sm">Lima, Perú</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/70">
                  <Monitor size={14} className="text-blue-400" />
                  <span className="text-sm">Remoto</span>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white/90 mt-1">
                Desarrollador Web & Soporte Técnico
              </h3>
              <p className="text-sm text-red-500 font-bold">
                Ago 2023 - Feb 2024
              </p>
            </div>
          </div>
        </MagicCard>

        {/* Top right - Description */}
        <MagicCard className="lg:col-span-5 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex items-center justify-center">
          <p className="text-sm md:text-base text-white/60 leading-relaxed text-justify">
            Condisa Romero Servicios Generales & Construcciones S.A.C. es una
            empresa peruana dedicada a la arquitectura, ingeniería y
            construcción. Ofrece servicios integrales como diseño de interiores,
            construcción en general, elaboración de planos, gestión de
            licencias, tasaciones y defensa civil.
          </p>
        </MagicCard>

        {/* Middle left - Responsibilities */}
        <MagicCard className="lg:col-span-7 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex flex-col justify-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <Monitor className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Desarrollo de la web corporativa con HTML, CSS, JS y PHP.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Implementación de sistema POS para la librería asociada (gestión
                de inventario y facturación).
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <Wrench className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Soporte técnico remoto: actualización de drivers, solución de
                errores en software de construcción.
              </p>
            </div>
          </div>
        </MagicCard>

        {/* Middle right - Tech Stack */}
        <MagicCard className="lg:col-span-5 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex items-center justify-center">
          <div className="flex flex-wrap gap-3 justify-center max-w-sm mx-auto">
            <TechBadge icon="🌐" name="HTML" color="text-orange-500" />
            <TechBadge icon="🎨" name="CSS" color="text-blue-500" />
            <TechBadge icon="⚛️" name="React" color="text-cyan-400" />
            <TechBadge icon="⚡" name="Vite" color="text-purple-500" />
            <TechBadge icon="🐘" name="PHP" color="text-indigo-400" />
            <TechBadge icon="💛" name="JS" color="text-yellow-500" />
            <TechBadge icon="📱" name="Responsive" color="text-blue-300" />
            <TechBadge icon="🗄️" name="MySQL" color="text-white/80" />
            <TechBadge icon="🛠️" name="Soporte técnico" color="text-gray-300" />
          </div>
        </MagicCard>

        {/* Bottom left - Aprendizajes clave title */}
        <MagicCard className="lg:col-span-4 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a80] border-white/5 font-roboto flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-amber-300">💡</div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
              Aprendizajes
              <br />
              clave
            </h3>
          </div>
        </MagicCard>

        {/* Bottom right - Quotes */}
        <MagicCard className="lg:col-span-8 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a80] border-white/5 font-roboto flex items-center justify-center">
          <div className="flex flex-col gap-4 text-center w-full">
            <blockquote className="text-sm md:text-base text-white/80">
              "Aprendí a trabajar en entornos institucionales con sistemas
              informáticos en producción."
            </blockquote>
            <blockquote className="text-sm md:text-base text-white/80">
              "Fortalecí mis habilidades en soporte técnico y comunicación con
              equipos multidisciplinarios."
            </blockquote>
            <blockquote className="text-sm md:text-base text-white/80">
              "Desarrollé disciplina en la gestión de tareas y documentación."
            </blockquote>
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

// Tech Badge Component
const TechBadge = ({ icon, name, color }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
    <span className="text-lg">{icon}</span>
    <span className={`text-sm font-medium ${color}`}>{name}</span>
  </div>
);

export default ExperienceCondisa;
