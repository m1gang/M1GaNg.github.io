import {
  Linkedin,
  Github,
  Twitter,
  Facebook,
  CheckCircle2,
  Zap,
} from "lucide-react";


const HomeRedes = () => {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto p-4 lg:p-10 flex flex-col gap-4 overflow-y-auto lg:overflow-hidden font-clash">
      {/* Header Container */}
      <div
        className="card-glass p-8 flex flex-col md:flex-row justify-between items-center bg-[#1a1a1a50] border-white/5"
      >
        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-3 rounded-2xl">
            <Zap className="w-8 h-8 text-white fill-white" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Conectemos</h2>
        </div>
        <p className="text-white/60 text-lg md:text-right max-w-sm mt-4 md:mt-0 font-medium">
          Disponible para colaborar, aprender y compartir en estas plataformas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Social Buttons Grid */}
        <div
          className="card-glass p-8 flex flex-col justify-center gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SocialButton
              icon={<Linkedin className="w-6 h-6" />}
              label="LinkedIn"
              color="bg-[#0077b5]"
              link="https://linkedin.com"

            />
            <SocialButton
              icon={<Github className="w-6 h-6" />}
              label="GitHub"
              color="bg-[#333]"
              link="https://github.com"
            />
            <SocialButton
              icon={<Twitter className="w-6 h-6" />}
              label="twitter"
              color="bg-black border border-white/10"
              link="https://twitter.com"
            />
            <SocialButton
              icon={<Facebook className="w-6 h-6" />}
              label="facebook"
              color="bg-[#4267B2]"
              link="https://facebook.com"
            />
          </div>
        </div>

        {/* Current Status Timeline */}
        <div
          className="card-glass p-8 flex flex-col"
        >
          <h3 className="text-2xl font-bold text-[#00c9ff] mb-8 tracking-widest uppercase">
            AHORA
          </h3>

          <div className="flex flex-col gap-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[#00c9ff30]"></div>

            <TimelineItem
              text="“Actualmente explorando Vite y Tailwind.”"
              active
            />
            <TimelineItem
              text="“Compartiendo proyectos open source en GitHub.”"
              active
            />
            <TimelineItem
              text="“Conectando con la comunidad dev en LinkedIn.”"
              active
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, label, color, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`${color} flex items-center gap-3 px-6 py-4 rounded-2xl transition-colors duration-300 hover:brightness-110 shadow-lg group`}
  >
    <div className="text-white">
      {icon}
    </div>
    <span className="text-xl font-medium text-white">{label}</span>
  </a>
);

const TimelineItem = ({ text, active }) => (
  <div className="flex gap-6 items-start z-10 group">
    <div
      className={`mt-1.5 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${active
          ? "bg-[#00c9ff] shadow-[0_0_15px_rgba(0,201,255,0.4)]"
          : "bg-gray-600"
        }`}
    >
      <CheckCircle2 className="w-4 h-4 text-black font-bold" />
    </div>
    <p className="text-white/90 text-lg italic leading-relaxed group-hover:text-white transition-colors">
      {text}
    </p>
  </div>
);

export default HomeRedes;
