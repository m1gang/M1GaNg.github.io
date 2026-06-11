import Icon from "../components/Icon";
import { MagicGridSection } from "@/components/MagicGridSection";

export const Inicio = () => {
  return (
    <div
      id="portafolio"
      className="flex flex-col lg:flex-row h-auto lg:h-screen lg:overflow-hidden w-full relative"
    >
      {/* <AnimatedBackground /> */}
      <header
        className="flex justify-center items-center w-full lg:w-1/5 h-auto lg:h-full font-clash"
      >
        <nav className="card-glass flex flex-col p-5 gap-y-5 justify-center border-indigo-500">
          <a href="#" className="flex items-center gap-1.5 p-2 text-white">
            <Icon name="home" fill="white" color="white" size={30} />
            <span className="font-medium text-[20px] leading-none text-white">
              INICIO
            </span>
          </a>
          <a href="#" className="flex items-center gap-1.5 p-2">
            <Icon name="user" fill="white" size={30} />
            <span className="font-medium text-[20px] leading-none">PERFIL</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 p-2">
            <Icon name="folder" fill="white" size={30} />
            <span className="font-medium text-[20px] leading-none">
              PROYECTOS
            </span>
          </a>
          <a href="#" className="flex items-center gap-1.5 p-2">
            <Icon name="road" fill="white" size={30} />
            <span className="font-medium text-[20px] leading-none">
              EXPERIENCIA
            </span>
          </a>
          <a href="#" className="flex items-center gap-1.5 p-2">
            <Icon name="contact" fill="white" size={30} />
            <span className="font-medium text-[20px] leading-none">
              CONTACTO
            </span>
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center font-roboto w-full h-full overflow-y-auto">
        <h1
          className="text-4xl p-2 font-thin font-sawbones"
        >
          INICIO
        </h1>

        <div
          className="nav-vertical p-2"
        >
          <nav className="card-glass flex py-1 px-1 gap-3">
            <a href="#" className="bg-white rounded-[25px] px-3 text-black">
              Portada
            </a>
            <a href="#" className="px-3">
              Redes
            </a>
          </nav>
        </div>

        <MagicGridSection
          className="flex-1 min-h-0"
          enableStars={false}
          enableSpotlight={false}
          enableBorderGlow={false}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={300}
          particleCount={0}
          glowColor="0, 0, 0"
        />
      </main>
    </div>
  );
};
