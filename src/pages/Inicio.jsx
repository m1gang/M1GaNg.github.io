import Icon from "../components/Icon";
import { motion } from "motion/react";
import GradientText from "@/components/GradientText";
import { MagicGridSection } from "@/components/MagicGridSection";
import AnimatedBackground from "@/components/AnimatedBackground";

export const Inicio = () => {
  return (
    <div
      id="portafolio"
      className="flex flex-col lg:flex-row h-auto lg:h-screen lg:overflow-hidden w-full relative"
    >
      {/* <AnimatedBackground /> */}
      <motion.header
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
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
      </motion.header>

      <main className="flex flex-col items-center font-roboto w-full h-full overflow-y-auto">
        <motion.h1
          className="text-4xl p-2 font-thin font-sawbones"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          INICIO
        </motion.h1>

        <motion.div
          className="nav-vertical p-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <nav className="card-glass flex py-1 px-1 gap-3">
            <a href="#" className="bg-white rounded-[25px] px-3 text-black">
              Portada
            </a>
            <a href="#" className="px-3">
              Redes
            </a>
          </nav>
        </motion.div>

        <MagicGridSection
          className="flex-1 min-h-0"
          enableStars={false}
          enableSpotlight={false}
          enableBorderGlow={false}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={false}
          spotlightRadius={300}
          particleCount={12}
          glowColor="255, 0, 0"
        />
      </main>
    </div>
  );
};
