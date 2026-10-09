import { motion } from "motion/react";
import { Send, Check, Loader2, User, AtSign, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "../MagicCard";
import { EMAIL, inputCls } from "../../constants/contact";

// "La Carta" — el formulario, componente principal del tablero.
// Sin scroll interno: ocupa toda la altura de su celda y el campo
// de mensaje absorbe el espacio sobrante (flex-1). El sellado
// lleva degradado rosa-rojo-naranja (cera) con highlight físico
// y sombra con offset real; el esmeralda queda solo para lo
// semántico (badge de disponibilidad, estado enviado).
export const ContactForm = ({
  rise,
  formData,
  sending,
  sent,
  error,
  messageCount,
  messageMax,
  handleChange,
  handleSubmit,
}) => (
  <motion.div
    {...rise}
    className="flex min-h-0 min-w-0 md:col-span-7 lg:[grid-area:form]"
  >
    <MagicCard
      aria-labelledby="contact-page-title"
      className="card-glass h-full w-full p-4 lg:p-5 font-roboto flex flex-col min-w-0"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 flex-1 min-h-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="min-w-0">
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-sm font-medium text-white/85"
            >
              Nombre{" "}
              <span aria-hidden="true" className="text-white/60">
                *
              </span>
            </label>
            <div className="relative">
              <User
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/40"
              />
              <input
                type="text"
                id="contact-name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                disabled={sending}
                className={cn(inputCls, "h-11 pl-10 pr-4")}
              />
            </div>
          </div>
          <div className="min-w-0">
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-sm font-medium text-white/85"
            >
              Correo electrónico{" "}
              <span aria-hidden="true" className="text-white/60">
                *
              </span>
            </label>
            <div className="relative">
              <AtSign
                aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/40"
              />
              <input
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                disabled={sending}
                className={cn(inputCls, "h-11 pl-10 pr-4")}
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-1.5 block text-sm font-medium text-white/85"
          >
            Asunto{" "}
            <span aria-hidden="true" className="text-white/60">
              *
            </span>
          </label>
          <div className="relative">
            <Tag
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-white/40"
            />
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ej. Frontend freelance, soporte IT, vacante…"
              required
              disabled={sending}
              maxLength={120}
              className={cn(inputCls, "h-11 pl-10 pr-4")}
            />
          </div>
        </div>

        {/* El mensaje absorbe la altura sobrante de la carta */}
        <div className="flex flex-col flex-1 min-h-0">
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-white/85"
            >
              Mensaje{" "}
              <span aria-hidden="true" className="text-white/60">
                *
              </span>
            </label>
            <span
              aria-hidden="true"
              className={cn(
                "text-[13px] tabular-nums",
                messageCount > messageMax - 100
                  ? "font-medium text-white/75"
                  : "text-white/45",
              )}
            >
              {messageCount}/{messageMax}
            </span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Contexto, objetivo y tiempos: ¿qué necesitas lograr y para cuándo?"
            required
            disabled={sending}
            maxLength={messageMax}
            className={cn(
              inputCls,
              "flex-1 min-h-[140px] px-4 py-2.5 resize-none",
            )}
          />
        </div>

        <div className="flex flex-col gap-2 pt-0.5">
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 px-4 h-12 lg:h-12 text-[15px] font-bold tracking-tight text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(124,10,10,0.25),0_14px_34px_-10px_rgba(244,63,94,0.55)] transition-all duration-200 hover:-translate-y-[2px] hover:brightness-105 active:translate-y-0 active:scale-[0.98] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(124,10,10,0.25),0_6px_16px_-8px_rgba(244,63,94,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {sending ? (
              <>
                <Loader2
                  aria-hidden="true"
                  className="w-5 h-5 animate-spin motion-reduce:animate-none"
                />
                Sellando…
              </>
            ) : sent ? (
              <>
                <Check aria-hidden="true" className="w-5 h-5" />
                Sellar otro mensaje
              </>
            ) : (
              <>
                <span
                  aria-hidden="true"
                  className="grid size-7 shrink-0 place-items-center rounded-lg bg-zinc-950/12 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <Send className="size-[15px]" />
                </span>
                Sellar y enviar
              </>
            )}
          </button>
          {sent && (
            <p
              role="status"
              aria-live="polite"
              className="text-center text-sm text-emerald-300"
            >
              ¡Mensaje listo! Si prefieres, escríbeme directo a{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold underline underline-offset-4 hover:text-emerald-200"
              >
                {EMAIL}
              </a>
            </p>
          )}
          {error && (
            <p role="alert" className="text-center text-sm text-red-300">
              Algo salió mal. Inténtalo de nuevo o escríbeme directo a{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold underline underline-offset-4 hover:text-red-200"
              >
                {EMAIL}
              </a>
            </p>
          )}
        </div>
      </form>
    </MagicCard>
  </motion.div>
);

export default ContactForm;
