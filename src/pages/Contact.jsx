import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  Copy,
  Check,
  Loader2,
  ArrowUpRight,
  FileDown,
  User,
  AtSign,
  Tag,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "../components/MagicCard";
import { EMAIL, LOCATION_LABEL } from "../constants/contact";

// Sistema visual heredado del resto del portafolio:
// - Contenedor: max-w-7xl + font-clash, cards MagicCard + .card-glass (25px, zinc monocromo)
// - Iconos: tile monocromo bg-white/5 + border-white/10 (como TechBadge), sin degradados de marca
// - Esmeralda reservado solo para estado semántico Disponible / éxito.
const PHONE_LABEL = "+51 954 936 677";
const PHONE_HREF = "tel:+51954936677";
const MESSAGE_MAX = 1000;

const TILE_CLS =
  "bg-white/5 border-white/10 text-white/80 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white";

const CHANNELS = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    action: "copy",
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: PHONE_LABEL,
    href: PHONE_HREF,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: LOCATION_LABEL,
    href: null,
  },
];

const SOCIALS = [
  {
    icon: Github,
    label: "GitHub",
    detail: "github.com/M1GaNg",
    href: "https://github.com/M1GaNg",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    detail: "Perfil profesional",
    href: "https://linkedin.com",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    detail: "Perfil en X",
    href: "https://twitter.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    detail: "Perfil en Instagram",
    href: "https://instagram.com",
  },
];

const inputCls =
  "w-full bg-white/5 border border-white/10 rounded-xl text-[15px] leading-relaxed text-white placeholder:text-white/50 caret-white selection:bg-white/20 selection:text-white transition-[border-color,background-color,box-shadow] hover:border-white/20 focus:border-white/40 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-white/15";

const Contact = () => {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const sendTimer = useRef(null);
  const copyTimer = useRef(null);

  const sending = status === "sending";
  const sent = status === "sent";
  const messageCount = formData.message.length;

  useEffect(
    () => () => {
      if (sendTimer.current) clearTimeout(sendTimer.current);
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "sent") setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setStatus("sending");
    sendTimer.current = setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:min-h-0 font-clash selection:bg-white/20 selection:text-white [-webkit-tap-highlight-color:transparent]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-0">
        {/* ── Formulario protagonista ─────────────────────────── */}
        <motion.div {...rise(0)} className="lg:col-span-7 min-w-0">
          <MagicCard aria-labelledby="contact-form-title" className="card-glass p-5 lg:p-6 font-roboto flex flex-col min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2
                  id="contact-form-title"
                  className="text-[28px] lg:text-[32px] font-semibold tracking-tight leading-tight text-white text-balance"
                >
                  Escríbeme
                </h2>
                <p className="mt-1.5 max-w-[52ch] text-sm leading-relaxed text-white/70">
                  Cuéntame de tu proyecto o tu vacante. Respondo en menos de
                  24&nbsp;horas, de lunes a viernes.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[13px] font-medium text-emerald-200">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
                </span>
                Disponible
              </span>
            </div>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-3 flex-1 min-h-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="min-w-0">
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-white/80"
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
                  className="mb-1.5 block text-sm font-medium text-white/80"
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
                className="mb-1.5 block text-sm font-medium text-white/80"
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
                  placeholder="Ej. Frontend freelance, soporte IT, colaboración…"
                  required
                  disabled={sending}
                  maxLength={120}
                  className={cn(inputCls, "h-11 pl-10 pr-4")}
                />
              </div>
            </div>

            <div className="flex flex-col flex-1 min-h-0">
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-white/80"
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
                    messageCount > MESSAGE_MAX - 100
                      ? "font-medium text-white/70"
                      : "text-white/40",
                  )}
                >
                  {messageCount}/{MESSAGE_MAX}
                </span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Contexto, objetivo y tiempos: ¿qué necesitas lograr y para cuándo?"
                rows={3}
                required
                disabled={sending}
                maxLength={MESSAGE_MAX}
                className={cn(inputCls, "min-h-[84px] lg:min-h-[72px] flex-1 px-4 py-2.5 resize-none lg:resize-none")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 h-12 text-[15px] font-semibold text-zinc-950 shadow-[0_8px_28px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-zinc-200 active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {sending ? (
                  <>
                    <Loader2 aria-hidden="true" className="w-5 h-5 animate-spin" />
                    Enviando…
                  </>
                ) : sent ? (
                  <>
                    <Check aria-hidden="true" className="w-5 h-5" />
                    Enviar otro mensaje
                  </>
                ) : (
                  <>
                    <Send aria-hidden="true" className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </button>
              {sent && (
                <p role="status" aria-live="polite" className="text-center text-sm text-emerald-300">
                  ¡Mensaje listo! Si prefieres, escríbeme directo a{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold underline underline-offset-4 hover:text-emerald-200"
                  >
                    {EMAIL}
                  </a>
                </p>
              )}
            </div>
          </form>
          </MagicCard>
        </motion.div>

        {/* ── Columna lateral: contacto directo + redes ── */}
        <motion.div {...rise(0.08)} className="lg:col-span-5 min-w-0 flex flex-col gap-4">
          <MagicCard
            aria-label="Contacto directo"
            className="card-glass p-3 font-roboto flex flex-col gap-1 min-w-0"
          >
            <h2 className="px-2 pt-1 text-base font-bold text-white tracking-tight">
              Contacto directo
            </h2>
            <p className="flex items-center gap-1.5 px-2 text-[13px] font-medium text-white/55">
              <Clock aria-hidden="true" className="size-4 shrink-0" />
              Respuesta en menos de 24 h · Lun-Vie
            </p>

            <ul className="flex flex-col">
              {CHANNELS.map(({ icon: Icon, label, value, href, action }) => (
                <li key={label}>
                  <div className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-1.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-xl border transition-colors duration-300",
                        TILE_CLS,
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] leading-tight text-white/55">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="block truncate text-[15px] font-medium leading-snug text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="truncate text-[15px] font-medium leading-snug text-white">
                          {value}
                        </p>
                      )}
                    </div>
                    {action === "copy" && (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-live="polite"
                        aria-label={
                          copied
                            ? "Correo copiado al portapapeles"
                            : `Copiar ${EMAIL}`
                        }
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {copied ? (
                          <Check aria-hidden="true" className="size-4" />
                        ) : (
                          <Copy aria-hidden="true" className="size-4" />
                        )}
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {copied && (
              <p aria-live="polite" className="px-2 text-[13px] leading-tight text-emerald-300">
                Correo copiado - pégalo donde prefieras.
              </p>
            )}

          </MagicCard>

          <MagicCard
            aria-label="Redes sociales y currículum"
            className="card-glass p-3 font-roboto flex flex-col gap-1 min-w-0"
          >
            <h2 className="px-2 pt-1 text-base font-bold text-white tracking-tight">
              Redes y CV
            </h2>
            <p className="px-2 text-[13px] font-medium text-white/55">Redes</p>
            <ul className="grid grid-cols-2 gap-0.5">
              {SOCIALS.map(({ icon: Icon, label, detail, href }) => (
                <li key={label} className="min-w-0">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} - abrir perfil en una pestaña nueva`}
                    className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-1.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-xl border transition-colors duration-300",
                        TILE_CLS,
                      )}
                    >
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium leading-snug text-white">
                        {label}
                      </span>
                      <span className="block truncate text-xs leading-tight text-white/55">
                        {detail}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div aria-hidden="true" className="mx-2 my-1 h-px shrink-0 bg-white/10" />

            <a
              href="https://www.cvresume.dev/m1gang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver CV - abrir en una pestaña nueva"
              className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-1.5 transition-colors duration-300 hover:border-white/10 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "grid size-9 shrink-0 place-items-center rounded-xl border transition-colors duration-300",
                  TILE_CLS,
                )}
              >
                <FileDown aria-hidden="true" className="size-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium leading-snug text-white">
                  Currículum
                </span>
                <span className="block truncate text-xs leading-tight text-white/55">
                  Mi experiencia en un PDF
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
              />
            </a>
          </MagicCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
