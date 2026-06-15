import { useRef } from "react";
import { MapPin, Monitor, FileText, Wrench } from "lucide-react";
import devdatepLogo from "../assets/img/education/devdatep.png";

const ExperienceDevdatep = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Top left - Company Info */}
        <div className="lg:col-span-7 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a1f3a]/40 border-white/5 relative group font-roboto flex items-center hover:bg-[#0a1f3a]/50 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10 w-full h-full">
            {/* Company Logo */}
            <div className="flex justify-center shrink-0 items-center">
              <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <img src={devdatepLogo} alt="condisa romero logo" />
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="flex flex-col justify-center gap-2 h-full py-2">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                DEVDATEP CONSULTING
              </h2>
              <div className="flex flex-row gap-4">
                <div className="flex items-center gap-1.5 text-white/70">
                  <MapPin size={14} className="text-sky-400" />
                  <span className="text-sm">Lima, Perú</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/70">
                  <Monitor size={14} className="text-blue-400" />
                  <span className="text-sm">Remoto</span>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white/90 mt-1">
                Desarrollador React Junior y Líder Área Frontend
              </h3>
              <p className="text-sm text-red-500 font-bold">
                Feb 2026 - Nay 2026
              </p>
            </div>
          </div>
        </div>

        {/* Top right - Description */}
        <div className="lg:col-span-5 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex items-center justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <p className="text-sm md:text-base text-white/60 leading-relaxed text-justify">
            Devdatep es una agencia especializada en marketing, diseño web,
            diseño gráfico y desarrollo de software . Se enfoca en impulsar la
            transformación digital de las organizaciones mediante soluciones
            tecnológicas estratégicas, como el desarrollo de intranets
            corporativas y la creación de servicios web de alto impacto
          </p>
        </div>

        {/* Middle left - Responsibilities */}
        <div className="lg:col-span-7 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex flex-col justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <Monitor className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Desarrollo de interfaces para la intranet corporativa
                (Onboarding y Reclutamiento) con React y Zod
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Liderazgo técnico y supervisión de maquetación basada en
                prototipos de Figma y documentación técnica
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                <Wrench className="w-5 h-5 text-yellow-400" />|{" "}
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Liderazgo técnico y supervisión de maquetación basada en
                prototipos de Figma y documentación técnica
              </p>
            </div>
          </div>
        </div>

        {/* Middle right - Tech Stack */}
        <div className="lg:col-span-5 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex items-center justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <div className="flex flex-wrap gap-3 justify-center max-w-sm mx-auto">
            <TechBadge icon="⚛️" name="React" color="text-cyan-400" />
            <TechBadge icon="⚡" name="Vite" color="text-purple-500" />
            <TechBadge icon="📘" name="TypeScript" color="text-blue-500" />
            <TechBadge icon="🛡️" name="Zod" color="text-yellow-500" />
            <TechBadge icon="🔄" name="React Query" color="text-red-500" />
            <TechBadge icon="📁" name="Supabase" color="text-green-500" />
            <TechBadge icon="☁️" name="Cloudinary" color="text-purple-500" />
            <TechBadge icon="🎨" name="Figma" color="text-blue-500" />
            <TechBadge icon="📖" name="Documentación" color="text-gray-500" />
          </div>
        </div>

        {/* Bottom left - Aprendizajes clave title */}
        <div className="lg:col-span-4 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a80] border-white/5 font-roboto flex items-center justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-amber-300">💡</div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
              Aprendizajes
              <br />
              clave
            </h3>
          </div>
        </div>

        {/* Bottom right - Quotes */}
        <div className="lg:col-span-8 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a80] border-white/5 font-roboto flex items-center justify-center hover:bg-white/[0.02] transition-colors duration-300">
          <div className="flex flex-col gap-4 text-center w-full">
            <blockquote className="text-sm md:text-base text-white/80">
              "Aprendí a liderar equipos técnicos coordinando el flujo entre
              diseño, documentación y desarrollo"
            </blockquote>
            <blockquote className="text-sm md:text-base text-white/80">
              "Perfeccioné el uso de arquitecturas modulares con React Query y
              esquemas de validación avanzada"
            </blockquote>
            <blockquote className="text-sm md:text-base text-white/80">
              "Aprendí a gestionar proyectos digitales desde la estrategia
              comercial hasta la entrega final"
            </blockquote>
          </div>
        </div>
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

export default ExperienceDevdatep;
