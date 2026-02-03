import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  ChevronLeft,
  ChevronRight,
  Phone,
  RotateCcw,
  Calculator,
  Search,
  DollarSign,
  FileText,
} from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";
import ImageCarousel from "../components/ImageCarousel";

const ProjectsMiniApps = () => {
  const gridRef = useRef(null);
  const [activeProject, setActiveProject] = useState("telephone");

  // Project Data Configuration
  const projectsData = {
    telephone: {
      id: "telephone",
      title: "Telephone Number Validator",
      description:
        "Validador de números telefónicos de Estados Unidos. Verifica el formato correcto de números telefónicos según las reglas de formato norteamericano. Desarrollado con HTML, CSS y JavaScript vanilla para validación en tiempo real.",
      icon: <Phone className="w-8 h-8 text-purple-400" />,
      iconBg: "bg-purple-500/20 border-purple-500/30",
      gradient: "from-[#2a1a4a] to-[#0a0a0a]",
      images: [
        new URL(
          "../assets/img/projects/miniapps/telefono-validator.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { icon: "🌐", name: "HTML", color: "text-orange-500" },
        { icon: "🎨", name: "CSS", color: "text-blue-500" },
        { icon: "💛", name: "JavaScript", color: "text-yellow-500" },
        { icon: "✅", name: "Regex", color: "text-green-500" },
      ],
      repoUrl:
        "https://github.com/m1gang/telephone-number-validator-freeCodeCamp",
    },
    palindrome: {
      id: "palindrome",
      title: "Palindrome Checker",
      description:
        "Verificador de palíndromos que determina si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda). Ignora espacios, puntuación y mayúsculas para una validación precisa.",
      icon: <RotateCcw className="w-8 h-8 text-cyan-400" />,
      iconBg: "bg-cyan-500/20 border-cyan-500/30",
      gradient: "from-[#1a3a4a] to-[#0a0a0a]",
      images: [
        new URL(
          "../assets/img/projects/miniapps/palindrome-checker.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { icon: "🌐", name: "HTML", color: "text-orange-500" },
        { icon: "🎨", name: "CSS", color: "text-blue-500" },
        { icon: "💛", name: "JavaScript", color: "text-yellow-500" },
        { icon: "🔤", name: "String Methods", color: "text-cyan-400" },
      ],
      repoUrl: "https://github.com/m1gang/palindrome-checker-freeCodeCamp",
    },
    roman: {
      id: "roman",
      title: "Roman Numeral Converter",
      description:
        "Conversor de números arábigos a números romanos. Convierte cualquier número del 1 al 3999 a su equivalente en numeración romana. Implementa el algoritmo de conversión con validación de rangos y manejo de casos especiales.",
      icon: <Calculator className="w-8 h-8 text-amber-400" />,
      iconBg: "bg-amber-500/20 border-amber-500/30",
      gradient: "from-[#3a2a1a] to-[#0a0a0a]",
      images: [
        new URL(
          "../assets/img/projects/miniapps/roman-numeral-converter.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { icon: "🌐", name: "HTML", color: "text-orange-500" },
        { icon: "🎨", name: "CSS", color: "text-blue-500" },
        { icon: "💛", name: "JavaScript", color: "text-yellow-500" },
        { icon: "🔢", name: "Algorithms", color: "text-amber-400" },
      ],
      repoUrl: "https://github.com/m1gang/roman-numeral-converter-freeCodeCamp",
    },
    rpg: {
      id: "rpg",
      title: "RPG Creature Search",
      description:
        "Buscador de criaturas para juegos de rol (RPG). Permite buscar y filtrar diferentes tipos de criaturas con sus estadísticas y características. Incluye sistema de búsqueda avanzada y visualización detallada de información.",
      icon: <Search className="w-8 h-8 text-emerald-400" />,
      iconBg: "bg-emerald-500/20 border-emerald-500/30",
      gradient: "from-[#1a3a2a] to-[#0a0a0a]",
      images: [
        new URL(
          "../assets/img/projects/miniapps/rpg-searach-creature.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { icon: "🌐", name: "HTML", color: "text-orange-500" },
        { icon: "🎨", name: "CSS", color: "text-blue-500" },
        { icon: "💛", name: "JavaScript", color: "text-yellow-500" },
        { icon: "🔍", name: "Search", color: "text-emerald-400" },
      ],
      repoUrl: "https://github.com/m1gang/RPG-creature-search-freeCodeCamp",
    },
    cashRegister: {
      id: "cashRegister",
      title: "Cash Register",
      description:
        "Caja registradora que calcula el cambio a devolver al cliente. Maneja diferentes denominaciones de billetes y monedas, verifica si hay suficiente cambio disponible y muestra el desglose exacto del cambio a entregar.",
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      iconBg: "bg-green-500/20 border-green-500/30",
      gradient: "from-[#1a3a1a] to-[#0a0a0a]",
      images: [
        new URL(
          "../assets/img/projects/miniapps/cash-register.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { icon: "🌐", name: "HTML", color: "text-orange-500" },
        { icon: "🎨", name: "CSS", color: "text-blue-500" },
        { icon: "💛", name: "JavaScript", color: "text-yellow-500" },
        { icon: "💰", name: "Math", color: "text-green-400" },
      ],
      repoUrl: "https://github.com/m1gang/cash-register-freecodeCamp",
    },
    formDesign: {
      id: "formDesign",
      title: "Form Design",
      description:
        "Diseño moderno de formulario desarrollado con Tailwind CSS. Presenta un diseño limpio y profesional con validación de campos, efectos visuales atractivos y totalmente responsivo. Ideal como plantilla para formularios de contacto o registro.",
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      iconBg: "bg-indigo-500/20 border-indigo-500/30",
      gradient: "from-[#1a1a3a] to-[#0a0a0a]",
      images: [
        new URL(
          "../assets/img/projects/miniapps/form-design.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { icon: "🌐", name: "HTML", color: "text-orange-500" },
        { icon: "🎨", name: "Tailwind", color: "text-cyan-400" },
        { icon: "💛", name: "JavaScript", color: "text-yellow-500" },
        { icon: "📱", name: "Responsive", color: "text-indigo-400" },
      ],
      repoUrl: "#", // No tiene repositorio específico
    },
  };

  const projectKeys = Object.keys(projectsData);
  const currentProject = projectsData[activeProject];

  const nextProject = () => {
    const currentIndex = projectKeys.indexOf(activeProject);
    const nextIndex = (currentIndex + 1) % projectKeys.length;
    setActiveProject(projectKeys[nextIndex]);
  };

  const prevProject = () => {
    const currentIndex = projectKeys.indexOf(activeProject);
    const prevIndex =
      (currentIndex - 1 + projectKeys.length) % projectKeys.length;
    setActiveProject(projectKeys[prevIndex]);
  };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <GlobalSpotlight gridRef={gridRef} />

      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Project Switcher - Icon & Title with Arrows */}
        <MagicCard
          className={`lg:col-span-4 lg:row-span-1 card-glass p-4 lg:px-6 lg:py-4 bg-gradient-to-br ${currentProject.gradient} border-white/5 font-roboto transition-colors duration-500`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-4 h-full">
            <div
              className={`p-3 rounded-xl border ${currentProject.iconBg} transition-colors duration-500 shrink-0`}
            >
              {currentProject.icon}
            </div>

            <div className="flex items-center gap-2 flex-1 justify-center">
              <button
                onClick={prevProject}
                className="p-1 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <h2 className="text-lg md:text-xl font-bold text-white text-center flex-1 select-none">
                {currentProject.title}
              </h2>

              <button
                onClick={nextProject}
                className="p-1 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all"
                aria-label="Next Project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </MagicCard>

        {/* Project Description */}
        <MagicCard
          className="lg:col-span-8 lg:row-span-1 card-glass p-4 lg:px-6 lg:py-4 bg-[#0a0a0a90] border-white/5 font-roboto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center h-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeProject}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-xs md:text-sm text-white/70"
              >
                {currentProject.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </MagicCard>

        {/* Image Carousel */}
        <MagicCard
          className="lg:col-span-12 lg:row-span-4 card-glass p-4 bg-[#0a0a0a90] border-white/5 overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <ImageCarousel
                images={currentProject.images}
                alt={`${currentProject.title} screenshot`}
                autoPlay={true}
                interval={4000}
              />
            </motion.div>
          </AnimatePresence>
        </MagicCard>

        {/* Tech Stack & GitHub */}
        <MagicCard
          className="lg:col-span-12 lg:row-span-1 card-glass p-4 lg:p-6 bg-[#0a0a0a90] border-white/5 font-roboto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 h-full">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject + "-tech"}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {currentProject.techs.map((tech, index) => (
                    <TechBadge
                      key={index}
                      icon={tech.icon}
                      name={tech.name}
                      color={tech.color}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* GitHub Button */}
            {currentProject.repoUrl !== "#" && (
              <a
                href={currentProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors group"
              >
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold">
                  Ver Repositorio
                </span>
              </a>
            )}
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

// Tech Badge Component
const TechBadge = ({ icon, name, color }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-default">
    <span className="text-lg">{icon}</span>
    <span className={`text-sm font-medium ${color}`}>{name}</span>
  </div>
);

export default ProjectsMiniApps;
