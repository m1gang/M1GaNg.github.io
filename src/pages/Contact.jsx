import { reveal, useReducedMotion } from "@/lib/motion";
import { useContactForm } from "../hooks/useContactForm";
import ContactAside from "../components/contact/ContactAside";
import ContactForm from "../components/contact/ContactForm";
import SocialStrip from "../components/contact/SocialStrip";

// Rediseño Contacto — estructura "Timeline + formulario con expectativa":
// - Izquierda: contexto, email hero copiable, 3 pasos de respuesta, canales directos.
// - Derecha: formulario protagonista (éxito = envío).
// - Abajo: tira única de redes + CV en línea, sin rejilla de tarjetas idénticas.
// Sistema heredado: max-w-7xl + font-clash, MagicCard + .card-glass (25px, zinc
// monocromo), tiles bg-white/5 border-white/10, esmeralda solo semántico.
const Contact = () => {
  const reduceMotion = useReducedMotion();
  const {
    formData,
    copied,
    sending,
    sent,
    messageCount,
    handleChange,
    handleSubmit,
    handleCopyEmail,
    messageMax,
  } = useContactForm();

  // Un solo momento de entrada, sin secuencias orquestadas (modo Operate).
  const rise = reveal(reduceMotion);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-4 overflow-y-auto lg:min-h-0 lg:overflow-hidden font-clash selection:bg-white/20 selection:text-white [-webkit-tap-highlight-color:transparent]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:flex-1 lg:min-h-0 lg:items-stretch">
        <ContactAside
          rise={rise}
          copied={copied}
          handleCopyEmail={handleCopyEmail}
        />
        <ContactForm
          rise={rise}
          formData={formData}
          sending={sending}
          sent={sent}
          messageCount={messageCount}
          messageMax={messageMax}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <SocialStrip rise={rise} />
    </div>
  );
};

export default Contact;
