import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import profile from "../assets/img/profile.png";
import logo from "../assets/img/migang.png";

import GradientText from "./GradientText";
import Icon from "./Icon";
import { MagicButton } from "./MagicButton";
import {
  MagicCard,
  DEFAULT_PARTICLE_COUNT,
  DEFAULT_GLOW_COLOR,
} from "./MagicCard";
import { GlobalSpotlight, DEFAULT_SPOTLIGHT_RADIUS } from "./GlobalSpotlight";

// --- Constants & Helpers from MagicBento ---
const MOBILE_BREAKPOINT = 768;

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export const MagicGridSection = ({
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  className = "",
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  const cardProps = {
    disableAnimations: shouldDisableAnimations,
    particleCount: enableStars ? particleCount : 0,
    glowColor,
    enableTilt,
    clickEffect,
    enableMagnetism,
    enableBorderGlow,
  };
  return (
    <>
      <style>
        {`
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }

          @keyframes border-glow-translate {
            0% { transform: translate(-50%, -50%); }
            100% { transform: translate(-50%, -50%) translate(10px, 10px); }
          }
          @keyframes border-glow-scale {
            0% { transform: translateX(-50%) scale(1); }
            100% { transform: translateX(-50%) scale(1.2); }
          }
          @keyframes star-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes star-shine {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <section
        className={`w-full h-auto lg:h-full bento-section rounded-md text-white ${className}`}
      >
        <div
          ref={gridRef}
          className="grid gap-4 h-auto lg:h-full lg:grid-cols-6 lg:grid-rows-5 md:grid-cols-4 pb-4 lg:pb-0"
        >
          <MagicCard
            className={`magic-card card-glass flex justify-center p-2 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1 md:col-span-2  md:col-start-1 md:row-start-2 ${enableBorderGlow ? "card--border-glow" : ""
              } font-roboto`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            {...cardProps}
          >
            <img src={profile} alt="profile-migang" />
          </MagicCard>

          <MagicCard
            className={`magic-card card-glass flex flex-col justify-center items-center lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-1 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-1 ${enableBorderGlow ? "card--border-glow" : ""
              } font-roboto`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            {...cardProps}
          >
            <h2 className="text-5xl flex gap-3 items-baseline">
              Hola soy
              <GradientText
                colors={["#FEE4E6", "#E6EFEB", "#CEFBF1"]}
                animationSpeed={8}
                className="text-8xl font-bold"
              >
                MiGaNg
              </GradientText>
            </h2>
            <h2 className="w-fit inline-block px-3 my-2 bg-white rounded-full font-medium text-black text-[20px]">
              &lt;Ingeniero de Sistemas & Frontend Developer/&gt;
            </h2>
            <p className="font-thin text-2xl text-center">
              "Me especializo en construir experiencias digitales que no solo
              funcionan, sino que comunican y fluyen."
            </p>
          </MagicCard>

          <MagicCard
            className={`magic-card card-glass shadow-lg p-6 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3 md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-3 ${enableBorderGlow ? "card--border-glow" : ""
              } font-roboto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 4,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            {...cardProps}
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl text-red-600 font-sawbones">+15</h1>
                <span className="flex text-xl gap-3">
                  <Icon name="proyectos" />
                  Proyectos
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl text-red-600 font-sawbones">+3</h1>
                <span className="flex text-xl gap-3">
                  <Icon name="certificacion" />
                  Certificaciones
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl text-red-600 font-sawbones">2</h1>
                <span className="flex items-center text-xl gap-3">
                  <Icon name="experiencia-laboral" />
                  Experiencias <br />
                  laborales
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[50px] text-red-600 font-sawbones">+1 año</h1>
                <span className="flex text-xl gap-3">
                  <Icon name="experiencia" />
                  Experiencia
                </span>
              </div>
            </div>
          </MagicCard>

          <MagicCard
            className={`magic-card flex justify-center items-center card-glass gap-4 lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-5 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-5 ${enableBorderGlow ? "card--border-glow" : ""
              } font-roboto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            {...cardProps}
          >
            <Icon name="migang-isotipo" fill="white" size={80} />
            <Icon name="migang-logotipo" fill="white" size={200} />
          </MagicCard>

          <MagicCard
            className={`magic-card card-glass lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-3 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-2 ${enableBorderGlow ? "card--border-glow" : ""
              } font-roboto`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            {...cardProps}
          >
            <div className="grid grid-cols-2 grid-rows-3 p-4 gap-2 h-full w-full">
              <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
                <div className="flex gap-2 justify-center items-center text-center">
                  <Icon name="code" size={28} />
                  Desarrollo
                  <br />
                  web
                </div>
                <p className="text-[15px] bg-[#8b8afd]/10 rounded p-1 font-thin">
                  Front end con React
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
                <div className="flex gap-2 justify-center items-center">
                  <Icon name="ui-ux" size={28} />
                  UI / UX
                </div>
                <p className="text-[15px] bg-[#37d09e]/10 rounded p-1 font-thin">
                  Prototipos
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
                <div className="flex gap-2 justify-center items-center">
                  <Icon name="soporte" size={28} />
                  Soporte
                  <br />
                  Técnico
                </div>
                <p className="text-[15px] bg-[#343d4e]/10 rounded p-1 font-thin">
                  Optimización
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
                <div className="flex gap-2 justify-center items-center">
                  <Icon name="design" size={28} />
                  Diseño
                  <br />
                  gráfico
                </div>
                <p className="text-[15px] bg-[#cc1b75]/10 rounded p-1 font-thin">
                  Corel, Branding
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
                <div className="flex gap-2 justify-center items-center">
                  <Icon name="graduate" size={28} />
                  Aprendizaje
                  <br />
                  continuo
                </div>
                <p className="text-[15px] bg-[#6d6d6d]/10 rounded p-1 font-thin">
                  Siempre aprendiendo
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
                <div className="flex gap-2 justify-center items-center">
                  <Icon name="comunicate" size={28} />
                  Comunicación
                </div>
                <p className="text-[15px] bg-[#afb1b7]/10 rounded p-1 font-thin">
                  Trabajo en equipo
                </p>
              </div>
            </div>
          </MagicCard>

          <div
            className="flex flex-col lg:col-span-2 lg:row-span-3 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-4 font-roboto " //technologies gap-4 lg:col-span-2 lg:row-span-3 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-4
          >
            <MagicCard
              className={`magic-card card-glass grow-4 flex flex-wrap justify-center items-center font-sawbones ${enableBorderGlow ? "card--border-glow" : ""
                } font-roboto`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              {...cardProps}
            >
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="react" />
                <h1 className="text-xl">React</h1>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="tailwindcss" />
                <h1 className="text-xl">Tailwind</h1>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="vitejs" />
                <h1 className="text-xl">Vite</h1>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="javascript" />
                <h1 className="text-xl">Javascript</h1>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="css" />
                <h1 className="text-xl">CSS</h1>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="html" />
                <h1 className="text-xl">HTML</h1>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="git" />
                <h1 className="text-xl">Git</h1>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="github" />
                <h1 className="text-xl">Github</h1>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#2929293b] border border-[#ffffff15] m-2 px-3 py-1 rounded-full w-fit h-fit">
                <Icon name="figma" />
                <h1 className="text-xl">Figma</h1>
              </div>
            </MagicCard>
            <motion.div
              className="grow flex flex-col gap-4 justify-center items-center m-5"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <MagicButton
                icon="projects"
                gradientColors={["#3BC4F2", "#7A69F9", "#2667FF"]}
                className="w-full"
              >
                Ver proyectos
              </MagicButton>
              <div className="flex gap-4 w-full h-full">
                <MagicButton
                  icon="contactar"
                  gradientColors={["#00F260", "#0575E6", "#00F260"]}
                  className="w-full"
                >
                  Contactar
                </MagicButton>
                <MagicButton
                  icon="cv"
                  gradientColors={["#7A69F9", "#F26378", "#F5833F"]}
                  className="w-full"
                >
                  Ver CV
                </MagicButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
