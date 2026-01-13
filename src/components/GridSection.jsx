import React from "react";
import { motion } from "motion/react";
import profile from "../assets/img/profile.png";
import GradientText from "./GradientText";
import Icon from "./Icon";

export const GridSection = () => {
  return (
    <section className="w-full h-auto p-2">
      {/* lg:grid-cols-6 lg:grid-rows-5 */}
      <div className="grid gap-3 h-auto lg:grid-cols-6 md:grid-cols-4 pb-4">
        <motion.div
          className="card-glass flex justify-center p-2 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1 md:col-span-2  md:col-start-1 md:row-start-2" //profile-img
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={profile} alt="profile-migang" />
        </motion.div>

        <motion.div
          className="card-glass flex flex-col justify-center items-center lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-1 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-1" //presentation
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h2 className="text-5xl flex gap-3 items-baseline">
            Hola soy
            <GradientText
              colors={["#DFFFEC", "#F0FAFF", "#FFCBFE", "#D5E9C5"]}
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
        </motion.div>

        <motion.div
          className="card-glass shadow-lg p-6 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3 md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-3" //resume
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 4,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
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
              <h1 className="text-6xl text-red-600 font-sawbones">+1 año</h1>
              <span className="flex text-xl gap-3">
                <Icon name="experiencia" />
                Experiencia
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center card-glass  gap-4 lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-5 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-5" //logo
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Icon name="migang-isotipo" fill="white" size={80} />
          <Icon name="migang-logotipo" fill="white" size={200} />
        </motion.div>

        <motion.div
          className="card-glass lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-3 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-2" //skills
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="grid grid-cols-2 grid-rows-3 p-4 gap-5 h-full w-full">
            <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
              <div className="flex gap-2 justify-center items-center">
                <Icon name="code" size={35} />
                Desarrollo
                <br />
                web
              </div>
              <p className="text-[15px] bg-[#8b8afd]/10 rounded-xl p-2">
                Front end con React
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
              <div className="flex gap-2 justify-center items-center">
                <Icon name="ui-ux" size={35} />
                UI / UX
              </div>
              <p className="text-[15px] bg-[#37d09e]/10 rounded-xl p-2">
                Prototipos
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
              <div className="flex gap-2 justify-center items-center">
                <Icon name="soporte" size={35} />
                Soporte
                <br />
                Técnico
              </div>
              <p className="text-[15px] bg-[#343d4e]/10 rounded-xl p-2">
                Optimización
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
              <div className="flex gap-2 justify-center items-center">
                <Icon name="design" size={35} />
                Diseño
                <br />
                gráfico
              </div>
              <p className="text-[15px] bg-[#cc1b75]/10 rounded-xl p-2">
                Corel, Branding
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
              <div className="flex gap-2 justify-center items-center">
                <Icon name="graduate" size={35} />
                Aprendizaje
                <br />
                continuo
              </div>
              <p className="text-[15px] bg-[#6d6d6d]/10 rounded-xl p-2">
                Siempre aprendiendo
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-2xl gap-2 bg-[#2929293b] rounded-2xl border border-[#ffffff15]">
              <div className="flex gap-2 justify-center items-center">
                <Icon name="comunicate" size={35} />
                Comunicación
              </div>
              <p className="text-[15px] bg-[#afb1b7]/10 rounded-xl p-2">
                Trabajo en equipo
              </p>
            </div>
          </div>
        </motion.div>

        <div
          className="flex flex-col gap-4 lg:col-span-2 lg:row-span-3 md:col-span-4 md:row-span-1 md:col-start-1 md:row-start-4" //technologies
        >
          <motion.div
            className="card-glass grow-4 flex flex-wrap justify-center items-center font-sawbones"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 4,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
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
          </motion.div>
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
            <button className="rounded-full w-full flex justify-center items-center gap-2 text-xl bg-white text-black p-3 ">
              <Icon name="projects" />
              Ver proyectos
            </button>
            <div className="flex  w-full gap-8">
              <button className="flex-1 rounded-full flex justify-center items-center gap-2 text-xl bg-white text-black p-2">
                <Icon name="cv" />
                Ver CV
              </button>
              <button className="flex-1 rounded-full flex justify-center items-center gap-2 text-xl bg-white text-black">
                <Icon name="contactar" fill="white" />
                Contactar
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
