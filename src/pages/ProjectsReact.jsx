import { useRef, useState } from "react";
import { MagicCard } from "../components/MagicCard";
import { Github } from "lucide-react";
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
        { iconName: "react", name: "React" },
        { iconName: "typescript", name: "TypeScript" },
        { iconName: "tailwindcss", name: "Tailwind" },
        { iconName: "vitest", name: "Vitest" },
        {
          iconName: "reactrouter",
          name: "React Router",
        },
        { iconName: "reactquery", name: "React Query" },
        { iconName: "devtalles", name: "DevTalles" },
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
        { iconName: "react", name: "React" },
        { iconName: "vitejs", name: "Vite" },
        { iconName: "materialui", name: "MaterialUI" },
        { iconName: "firebase", name: "Firebase" },
        {
          iconName: "reactrouter",
          name: "React Router",
        },
        { iconName: "redux", name: "Redux" },
        { iconName: "devtalles", name: "DevTalles" },
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
        { iconName: "typescript", name: "TypeScript" },
        { iconName: "vitejs", name: "Vite" },
        { iconName: "tailwindcss", name: "Tailwind" },
        { iconName: "zustand", name: "Zustand" },
        {
          iconName: "reactrouter",
          name: "React Router",
        },
        { iconName: "reactquery", name: "React Query" },
        { iconName: "devtalles", name: "DevTalles" },
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

        {/* Image Carousel */}
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
  <div className="font-clash flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-default">
    <Icon name={iconName} size={20} />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export default ProjectsReact;
