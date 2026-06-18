import { useRef, useState } from "react";
import { MagicCard } from "../components/MagicCard";
import { Github } from "lucide-react";
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
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/web-condisa.png",
              import.meta.url,
            ).href
          }
          alt="Website Condisa Romero"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
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
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/pos-condisa.png",
              import.meta.url,
            ).href
          }
          alt="Sistema POS Librería"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
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
        { iconName: "php", name: "PHP" },
        { iconName: "mysql", name: "MySQL" },
        { iconName: "javascript", name: "JS" },
        { iconName: "bootstrap", name: "Bootstrap" },
        { iconName: "jquery", name: "jquery" },
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
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden  lg:h-screen">
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Project Switcher - Icon & Title */}
        <MagicCard className="lg:col-span-4 lg:row-span-1 card-glass p-4 lg:px-6 lg:py-4 bg-[#0a0a0a90] border-white/5 font-roboto transition-colors duration-500 hover:bg-white/[0.02]">
          <div className="flex items-center gap-4 h-full w-full justify-center">
            <div className="p-3 rounded-xl border bg-white/5 border-white/10 transition-colors duration-500 shrink-0 flex items-center justify-center">
              {currentProject.icon}
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white text-center select-none">
              {currentProject.title}
            </h2>
          </div>
        </MagicCard>

        {/* Project Description */}
        <MagicCard className="lg:col-span-8 lg:row-span-1 card-glass p-4 lg:px-6 lg:py-4 bg-[#0a0a0a90] border-white/5 font-roboto">
          <div className="flex items-center h-full">
            <p className="text-xs md:text-sm text-white/70">
              {currentProject.description}
            </p>
          </div>
        </MagicCard>
        <MagicCard className="lg:col-span-12 lg:row-span-4 card-glass p-4 bg-[#0a0a0a90] border-white/5 overflow-hidden group">
          <div className="w-full h-full">
            <ImageCarousel
              images={currentProject.images}
              alt={`${currentProject.title} screenshot`}
              autoPlay={true}
              interval={4000}
              onPrevProject={prevProject}
              onNextProject={nextProject}
            />
          </div>
        </MagicCard>

        {/* Tech Stack & GitHub */}
        <MagicCard className="lg:col-span-12 lg:row-span-1 card-glass p-4 lg:p-6 bg-[#0a0a0a90] border-white/5 font-roboto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 h-full">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <div className="flex flex-wrap gap-3">
                {currentProject.techs.map((tech, index) => (
                  <TechBadge
                    key={index}
                    iconName={tech.iconName}
                    name={tech.name}
                    color={tech.color}
                  />
                ))}
              </div>
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
const TechBadge = ({ iconName, name }) => (
  <div className=" flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-default">
    <Icon name={iconName} size={20} />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export default ProjectsCondisa;
