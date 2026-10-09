import { motion } from "motion/react";
import { reveal, useReducedMotion } from "@/lib/motion";
import { MagicCard } from "@/components/MagicCard";
import { useContactForm } from "../hooks/useContactForm";
import ContactForm from "../components/contact/ContactForm";
import ContactChannels from "../components/contact/ContactChannels";
import ContactSocials from "../components/contact/ContactSocials";

// Rediseño Contacto — tablero bento con áreas nombradas (port-10,
// brief del usuario): el formulario es el componente principal
// (col-8, altura completa) y NINGUNA tarjeta scrollea. En lg todo
// cabe en 100vh (presupuesto: chrome ~110px + padding); si la
// ventana es más baja, la página scrollea — jamás se recorta
// contenido ni se anida scroll. Color concentrado: esmeralda para
// la acción, gradientes de marca en redes. Sistema heredado: zinc
// monocromo, .card-glass (25px), Clash Display + Roboto.
//
// Port-11: se retira el card "Qué pasa después" (información vacía
// para el visitante) y las redes suben a la columna lateral, junto
// a los canales directos. El grid baja a 2 filas: cabecera + cuerpo.
const Contact = () => {
  const reduceMotion = useReducedMotion();
  const {
    formData,
    copied,
    sending,
    sent,
    error,
    messageCount,
    handleChange,
    handleSubmit,
    handleCopyEmail,
    messageMax,
  } = useContactForm();

  // Reveal por celda con stagger (patrón portada).
  const rise = (index) =>
    reveal(reduceMotion, { index, y: 14, duration: 0.4, stagger: 0.05 });

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-4 overflow-y-auto font-clash selection:bg-white/20 selection:text-white [-webkit-tap-highlight-color:transparent]">
      <section
        aria-label="Contacto"
        className="bento-section rounded-md text-white w-full h-auto lg:h-full"
      >
        {/* Grid avanzado: áreas nombradas. lg = 2 filas
            (cabecera / cuerpo) con el formulario ocupando 8 de 12
            columnas y la columna lateral (canales + redes) las 4
            restantes. md = 12 cols por spans; móvil = columna
            única. */}
        <div
          className="grid gap-4 h-auto lg:h-full grid-cols-1
                     md:grid-cols-12
                     lg:grid-rows-[auto_minmax(min-content,1fr)]
                     lg:[grid-template-areas:'head_head_head_head_head_head_head_head_head_head_head_head'_'form_form_form_form_form_form_form_form_side_side_side_side']"
        >
          {/* 1. CABECERA — tira compacta: disponibilidad, headline y contexto */}
          <motion.header
            {...rise(0)}
            className="md:col-span-12 lg:[grid-area:head] min-w-0"
          >
            <MagicCard className="card-glass px-4 py-2.5 lg:px-5 lg:py-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[13px] font-medium text-emerald-200">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
                </span>
                Disponible
              </span>
              <h2
                id="contact-page-title"
                className="text-xl lg:text-2xl font-semibold tracking-tight leading-tight text-white"
              >
                Hablemos de tu proyecto
              </h2>
              <p className="max-w-[46ch] text-[13px] lg:text-sm leading-snug text-white/65 md:ml-auto">
                Vacante, freelance o colaboración: cuéntame qué necesitas
                lograr y para cuándo.
              </p>
            </MagicCard>
          </motion.header>

          {/* 2. LA CARTA — el formulario, componente principal */}
          <ContactForm
            rise={rise(1)}
            formData={formData}
            sending={sending}
            sent={sent}
            error={error}
            messageCount={messageCount}
            messageMax={messageMax}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          {/* 3. COLUMNA LATERAL — canales directos (arriba) + redes y CV (abajo) */}
          <div className="flex min-h-0 min-w-0 flex-col gap-4 md:col-span-5 lg:[grid-area:side] lg:grid lg:grid-rows-[auto_auto]">
            <ContactChannels
              rise={rise(2)}
              copied={copied}
              handleCopyEmail={handleCopyEmail}
            />
            <ContactSocials rise={rise(3)} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
