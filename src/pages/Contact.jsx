import { useRef } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, FileText, Send } from "lucide-react";
import { MagicCard } from "../components/MagicCard";
import { GlobalSpotlight } from "../components/GlobalSpotlight";

const Contact = () => {
  const gridRef = useRef(null);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <GlobalSpotlight gridRef={gridRef} />

      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 h-full w-full"
      >
        {/* Hero Card */}
        <MagicCard
          className="lg:col-span-12 lg:row-span-2 card-glass p-8 lg:p-12 bg-gradient-to-br from-[#1a0a3a] to-[#0a0a0a] border-white/5 relative group font-roboto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-purple-500/15 transition-all duration-1000"></div>

          <div className="flex flex-col items-center justify-center h-full relative z-10 gap-4">
            <div className="flex items-center gap-3">
              <Send className="w-10 h-10 text-purple-400" />
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                ¡Conectemos!
              </h2>
            </div>

            <p className="text-lg md:text-xl text-white/70 text-center max-w-3xl leading-relaxed">
              Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes
              un proyecto en mente o simplemente quieres conversar sobre
              tecnología, no dudes en contactarme.
            </p>
          </div>
        </MagicCard>

        {/* Email Card */}
        <MagicCard className="lg:col-span-6 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Email</h3>
          </div>

          <a
            href="mailto:miguelganga.dev@gmail.com"
            className="text-lg md:text-xl text-blue-400 hover:text-blue-300 transition-colors break-all"
          >
            miguelganga.dev@gmail.com
          </a>

          <p className="text-sm text-white/60 mt-4">
            Respondo en 24-48 horas. Perfecto para consultas profesionales o
            colaboraciones.
          </p>
        </MagicCard>

        {/* CV Card */}
        <MagicCard className="lg:col-span-6 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
              <FileText className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Currículum</h3>
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-colors w-fit"
          >
            <FileText size={20} />
            <span className="font-semibold">Descargar CV</span>
          </a>

          <p className="text-sm text-white/60 mt-4">
            Descarga mi currículum actualizado en formato PDF.
          </p>
        </MagicCard>

        {/* Social Media Cards */}
        <MagicCard className="lg:col-span-4 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex flex-col justify-center items-center text-center gap-4 hover:bg-white/5 transition-colors group/card">
          <div className="p-4 bg-gray-800 rounded-2xl group-hover/card:scale-110 transition-transform">
            <Github className="w-10 h-10 text-white" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
            <a
              href="https://github.com/M1GaNg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              @M1GaNg
            </a>
          </div>

          <p className="text-sm text-white/50">
            Explora mis proyectos y contribuciones open source
          </p>
        </MagicCard>

        <MagicCard className="lg:col-span-4 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex flex-col justify-center items-center text-center gap-4 hover:bg-white/5 transition-colors group/card">
          <div className="p-4 bg-blue-600 rounded-2xl group-hover/card:scale-110 transition-transform">
            <Linkedin className="w-10 h-10 text-white" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/miguel-ganga/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Miguel Ganga
            </a>
          </div>

          <p className="text-sm text-white/50">
            Conéctate conmigo profesionalmente
          </p>
        </MagicCard>

        <MagicCard className="lg:col-span-4 lg:row-span-2 card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 font-roboto flex flex-col justify-center items-center text-center gap-4 hover:bg-white/5 transition-colors group/card">
          <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl group-hover/card:scale-110 transition-transform">
            <Mail className="w-10 h-10 text-white" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">Email Directo</h3>
            <a
              href="mailto:miguelganga.dev@gmail.com"
              className="text-white/70 hover:text-white transition-colors break-all px-2"
            >
              Enviar mensaje
            </a>
          </div>

          <p className="text-sm text-white/50">
            La forma más rápida de contactarme
          </p>
        </MagicCard>
      </div>
    </div>
  );
};

export default Contact;
