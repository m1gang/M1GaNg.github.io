import { useRef, useState } from "react";
import { Github } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import ImageCarousel from "../components/ImageCarousel";
import Icon from "../components/Icon";

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
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/phone-validate.png",
              import.meta.url,
            ).href
          }
          alt="Telephone Number Validator"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/miniapps/telefono-validator.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "html", name: "HTML", color: "text-orange-500" },
        { iconName: "css", name: "CSS", color: "text-blue-600" },
        {
          iconName: "javascript",
          name: "JavaScript",
          color: "text-yellow-300",
        },
        { iconName: "regex", name: "Regex", color: "text-blue-500" },
        { iconName: "freecodecamp", name: "freecodecamp", color: "text-white" },
      ],
      repoUrl:
        "https://github.com/m1gang/telephone-number-validator-freeCodeCamp",
    },
    palindrome: {
      id: "palindrome",
      title: "Palindrome Checker",
      description:
        "Verificador de palíndromos que determina si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda). Ignora espacios, puntuación y mayúsculas para una validación precisa.",
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/palindrome.png",
              import.meta.url,
            ).href
          }
          alt="Palindrome Checker"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/miniapps/palindrome-checker.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "html", name: "HTML", color: "text-orange-500" },
        { iconName: "css", name: "CSS", color: "text-blue-600" },
        {
          iconName: "javascript",
          name: "JavaScript",
          color: "text-yellow-300",
        },
        { iconName: "freecodecamp", name: "freecodecamp", color: "text-white" },
      ],
      repoUrl: "https://github.com/m1gang/palindrome-checker-freeCodeCamp",
    },
    roman: {
      id: "roman",
      title: "Roman Numeral Converter",
      description:
        "Conversor de números arábigos a números romanos. Convierte cualquier número del 1 al 3999 a su equivalente en numeración romana. Implementa el algoritmo de conversión con validación de rangos y manejo de casos especiales.",
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/roman-converter.png",
              import.meta.url,
            ).href
          }
          alt="Roman Numeral Converter"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/miniapps/roman-numeral-converter.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "html", name: "HTML", color: "text-orange-500" },
        { iconName: "css", name: "CSS", color: "text-blue-600" },
        {
          iconName: "javascript",
          name: "JavaScript",
          color: "text-yellow-300",
        },
        { iconName: "freecodecamp", name: "freecodecamp", color: "text-white" },
      ],
      repoUrl: "https://github.com/m1gang/roman-numeral-converter-freeCodeCamp",
    },
    rpg: {
      id: "rpg",
      title: "RPG Creature Search",
      description:
        "Buscador de criaturas para juegos de rol (RPG). Permite buscar y filtrar diferentes tipos de criaturas con sus estadísticas y características. Incluye sistema de búsqueda avanzada y visualización detallada de información.",
      icon: (
        <img
          src={
            new URL(
              "../assets/img/icon-projects/rpg-search.png",
              import.meta.url,
            ).href
          }
          alt="RPG Creature Search"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/miniapps/rpg-searach-creature.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "html", name: "HTML" },
        { iconName: "css", name: "CSS" },
        {
          iconName: "javascript",
          name: "JavaScript",
        },
        { iconName: "api-interface", name: "API" },
        { iconName: "freecodecamp", name: "freecodecamp" },
      ],
      repoUrl: "https://github.com/m1gang/RPG-creature-search-freeCodeCamp",
    },
    cashRegister: {
      id: "cashRegister",
      title: "Cash Register",
      description:
        "Caja registradora que calcula el cambio a devolver al cliente. Maneja diferentes denominaciones de billetes y monedas, verifica si hay suficiente cambio disponible y muestra el desglose exacto del cambio a entregar.",
      icon: (
        <img
          src={
            new URL("../assets/img/icon-projects/cash.png", import.meta.url)
              .href
          }
          alt="Cash Register"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/miniapps/cash-register.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "html", name: "HTML" },
        { iconName: "css", name: "CSS" },
        {
          iconName: "javascript",
          name: "JavaScript",
        },
        { iconName: "freecodecamp", name: "freecodecamp" },
      ],
      repoUrl: "https://github.com/m1gang/cash-register-freecodeCamp",
    },
    formDesign: {
      id: "formDesign",
      title: "Form Design",
      description:
        "Diseño moderno de formulario desarrollado con Tailwind CSS. Presenta un diseño limpio y profesional con validación de campos, efectos visuales atractivos y totalmente responsivo. Ideal como plantilla para formularios de contacto o registro.",
      icon: (
        <img
          src={
            new URL("../assets/img/icon-projects/form.png", import.meta.url)
              .href
          }
          alt="Form Design"
          className="w-10 h-10 object-contain drop-shadow-md"
        />
      ),
      images: [
        new URL(
          "../assets/img/projects/miniapps/form-design.png",
          import.meta.url,
        ).href,
      ],
      techs: [
        { iconName: "html", name: "HTML" },
        { iconName: "tailwindcss", name: "Tailwind" },
        {
          iconName: "javascript",
          name: "JavaScript",
        },
        {
          iconName: "responsive",
          name: "Responsive",
        },
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
const TechBadge = ({ iconName, name }) => (
  <div className="font-clash flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-default">
    <Icon name={iconName} size={20} />
    <span className="text-sm font-medium`">{name}</span>
  </div>
);

export default ProjectsMiniApps;
