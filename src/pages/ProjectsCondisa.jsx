import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Github,
  ShoppingCart,
  Globe,
  Server,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";
import ImageCarousel from "../components/ImageCarousel";
import Icon from "../components/Icon";

const ProjectsCondisa = () => {
  const gridRef = useRef(null);
  const [activeProject, setActiveProject] = useState("website");

  // Project Data Configuration
  const projectsData = {
    website: {
      id: "website",
      title: "Website Condisa Romero",
      description:
        "Sitio web corporativo para una empresa de construcción y servicios. Desarrollado para fortalecer la presencia digital y facilitar el contacto con clientes. Cuenta con secciones de servicios, proyectos y blog, optimizado para SEO y rendimiento.",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      iconBg: "bg-blue-500/20 border-blue-500/30",
      gradient: "from-[#1a2a4a] to-[#0a0a0a]",
      images: [
        new URL(
          "../assets/img/projects/CONDISA/website-condisa-romero-1.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/CONDISA/website-condisa-romero-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/CONDISA/website-condisa-romero-3.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "react", name: "React", color: "text-cyan-400" },
        { iconName: "vitejs", name: "Vite", color: "text-purple-500" },
        { iconName: "css", name: "CSS", color: "text-blue-600" },
        { iconName: "responsive", name: "Responsive", color: "text-green-500" },
      ],
      repoUrl: "https://github.com/m1gang/website-condisa-romero",
    },
    pos: {
      id: "pos",
      title: "Sistema POS Librería",
      description:
        "Sistema de Punto de Venta (POS) completo para la gestión de inventario y ventas de una librería. Incluye manejo de productos, control de stock, generación de reportes y facturación. Desarrollado con PHP y MySQL para una gestión robusta de datos.",
      icon: <ShoppingCart className="w-8 h-8 text-green-400" />,
      iconBg: "bg-green-500/20 border-green-500/30",
      gradient: "from-[#0a3a1a] to-[#0a0a0a]",
      images: [
        new URL(
          "../assets/img/projects/CONDISA/pos-libreria-1.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/CONDISA/pos-libreria-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/CONDISA/pos-libreria-3.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "php", name: "PHP", color: "text-purple-400" },
        { iconName: "mysql", name: "MySQL", color: "text-orange-400" },
        { iconName: "javascript", name: "JS", color: "text-yellow-400" },
        { iconName: "bootstrap", name: "Bootstrap", color: "text-indigo-400" },
        { iconName: "jquery", name: "jquery", color: "text-blue-400" },
      ],
      repoUrl: "https://github.com/m1gang/pos-system-php",
    },
  };

  const nextProject = () => {
    const projectKeys = Object.keys(projectsData);
    const currentIndex = projectKeys.indexOf(activeProject);
    const nextIndex = (currentIndex + 1) % projectKeys.length;
    setActiveProject(projectKeys[nextIndex]);
  };

  const prevProject = () => {
    const projectKeys = Object.keys(projectsData);
    const currentIndex = projectKeys.indexOf(activeProject);
    const prevIndex =
      (currentIndex - 1 + projectKeys.length) % projectKeys.length;
    setActiveProject(projectKeys[prevIndex]);
  };

  const currentProject = projectsData[activeProject];

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <GlobalSpotlight gridRef={gridRef} />

      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Project Switcher - Icon & Title */}
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
                      iconName={tech.iconName}
                      name={tech.name}
                      color={tech.color}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* GitHub Button */}
            <a
              href={currentProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors group"
            >
              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-semibold">Ver Repositorio</span>
            </a>
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

// Tech Badge Component
const TechBadge = ({ iconName, name, color }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-default">
    <Icon name={iconName} size={20} className={color} />
    <span className={`text-sm font-medium ${color}`}>{name}</span>
  </div>
);

export default ProjectsCondisa;
