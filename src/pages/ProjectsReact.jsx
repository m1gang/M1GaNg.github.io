import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";
import ImageCarousel from "../components/ImageCarousel";
import Icon from "../components/Icon";

const ProjectsReact = () => {
  const gridRef = useRef(null);
  const [activeProject, setActiveProject] = useState("gifs");

  // Project Data Configuration
  const projectsData = {
    gifs: {
      id: "gifs",
      title: "GIFs App Search",
      description:
        "Aplicación para buscar y visualizar GIFs animados utilizando la API de Giphy. Desarrollada con React y Vite, permite a los usuarios buscar, explorar y guardar sus GIFs favoritos con una interfaz moderna y responsiva.",
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/giff-search.png",
              import.meta.url,
            ).href
          }
          alt="GIFs App Search"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/REACT/gif-app-search.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "react", name: "React", color: "text-cyan-400" },
        { iconName: "typescript", name: "TypeScript", color: "text-blue-400" },
        { iconName: "vitejs", name: "Vite", color: "text-purple-500" },
        { iconName: "vitest", name: "Vitest", color: "text-green-500" },
        { iconName: "giphy", name: "Giphy API", color: "text-pink-400" },
        { iconName: "devtalles", name: "DevTalles", color: "text-purple-800" },
      ],
      repoUrl: "https://github.com/m1gang/gifs-app-updated",
    },
    heroes: {
      id: "heroes",
      title: "Heroes App Search",
      description:
        "Aplicación de búsqueda de superhéroes con información detallada de personajes de DC y Marvel. Incluye sistema de rutas protegidas, autenticación de usuarios y búsqueda avanzada con filtros. Desarrollada con React Router y Context API.",
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/logo-heroes-search.png",
              import.meta.url,
            ).href
          }
          alt="Heroes App Search"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/REACT/heroes-app-search-1.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/REACT/heroes-app-search-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/REACT/heroes-app-search-3.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "react", name: "React", color: "text-cyan-400" },
        { iconName: "typescript", name: "TypeScript", color: "text-blue-400" },
        { iconName: "tailwindcss", name: "Tailwind", color: "text-sky-400" },
        { iconName: "vitest", name: "Vitest", color: "text-green-500" },
        {
          iconName: "reactrouter",
          name: "React Router",
          color: "text-red-500",
        },
        { iconName: "reactquery", name: "React Query", color: "text-red-300" },
        { iconName: "devtalles", name: "DevTalles", color: "text-purple-800" },
      ],
      repoUrl: "https://github.com/m1gang/heroes-app-updated",
    },
    journal: {
      id: "journal",
      title: "Journal App",
      description:
        "Aplicación de diario personal desarrollada con React, Vite y Firebase. Permite a los usuarios crear, editar y gestionar sus notas personales con autenticación segura y almacenamiento en la nube. Incluye carga de imágenes y sincronización en tiempo real.",
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/journal-app.png",
              import.meta.url,
            ).href
          }
          alt="Journal App"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/REACT/journal-app-1.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/REACT/journal-app-2.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "react", name: "React", color: "text-cyan-400" },
        { iconName: "vitejs", name: "Vite", color: "text-purple-500" },
        { iconName: "materialui", name: "MaterialUI", color: "text-blue-500" },
        { iconName: "firebase", name: "Firebase", color: "text-orange-500" },
        {
          iconName: "reactrouter",
          name: "React Router",
          color: "text-red-500",
        },
        { iconName: "redux", name: "Redux", color: "text-purple-500" },
        { iconName: "devtalles", name: "DevTalles", color: "text-purple-800" },
      ],
      repoUrl: "https://github.com/m1gang/journal-app-react",
    },
    teslo: {
      id: "teslo",
      title: "Teslo Shop",
      description:
        "E-commerce completo desarrollado con React y Next.js. Incluye catálogo de productos, carrito de compras, sistema de pagos con PayPal, gestión de inventario y panel de administración. Diseñado con una interfaz moderna y optimizado para SEO.",
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/teslo-shop.png",
              import.meta.url,
            ).href
          }
          alt="Teslo Shop"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/REACT/teslo-shop-react-1.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/REACT/teslo-shop-react-2.png",
          import.meta.url,
        ).href,
        new URL(
          "../assets/img/projects/REACT/teslo-shop-react-3.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "react", name: "React", color: "text-cyan-400" },
        { iconName: "typescript", name: "TypeScript", color: "text-blue-400" },
        { iconName: "vitejs", name: "Vite", color: "text-purple-500" },
        { iconName: "tailwindcss", name: "Tailwind", color: "text-teal-400" },
        { iconName: "zustand", name: "Zustand", color: "text-orange-800" },
        {
          iconName: "reactrouter",
          name: "React Router",
          color: "text-red-500",
        },
        { iconName: "reactquery", name: "React Query", color: "text-red-300" },
        { iconName: "devtalles", name: "DevTalles", color: "text-purple-800" },
      ],
      repoUrl: "https://github.com/m1gang/teslo-shop-react",
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
          className="lg:col-span-4 lg:row-span-1 card-glass p-4 lg:px-6 lg:py-4 bg-[#0a0a0a90] border-white/5 font-roboto transition-colors duration-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-4 h-full w-full justify-between">
            <button
              onClick={prevProject}
              className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all shrink-0"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 flex-1 justify-center">
              <div className="p-3 rounded-xl border bg-white/5 border-white/10 transition-colors duration-500 shrink-0 flex items-center justify-center">
                {currentProject.icon}
              </div>

              <h2 className="text-lg md:text-xl font-bold text-white text-center select-none">
                {currentProject.title}
              </h2>
            </div>

            <button
              onClick={nextProject}
              className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all shrink-0"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
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

export default ProjectsReact;
