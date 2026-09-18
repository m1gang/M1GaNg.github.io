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

// Radius system: cards rounded-2xl (16px), inputs/buttons/icon tiles rounded-xl (12px), status pill rounded-full.
// Color system: monochrome zinc/white base; brand gradients on icon tiles
// (dark gradient resting, light gradient on hover); emerald reserved for
// semantic success/availability states only.
const EMAIL = "miguelangelyv1@gmail.com";
const PHONE_LABEL = "+51 954 936 677";
const PHONE_HREF = "tel:+51954936677";
const MESSAGE_MAX = 1000;

const CHANNELS = [
  {
    icon: Mail,
    tile: "border-transparent bg-gradient-to-br from-[#7A1F1A] via-[#C5221F] to-[#EA4335] text-white",
    tileHover:
      "group-hover:border-[#EA4335]/25 group-hover:from-[#FFF1F0] group-hover:via-[#FDE3E1] group-hover:to-[#FAC5C0] group-hover:text-[#C5221F] group-hover:shadow-[0_8px_24px_-8px_rgba(234,67,53,0.55)]",
    label: "Correo electrónico",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    action: "copy",
  },
  {
    icon: Phone,
    tile: "border-transparent bg-gradient-to-br from-[#075E54] via-[#0E7A3D] to-[#25D366] text-white",
    tileHover:
      "group-hover:border-[#25D366]/25 group-hover:from-[#E9F9EF] group-hover:via-[#D3F2DC] group-hover:to-[#A9E5BC] group-hover:text-[#0E7A3D] group-hover:shadow-[0_8px_24px_-8px_rgba(37,211,102,0.55)]",
    label: "Teléfono / WhatsApp",
    value: PHONE_LABEL,
    href: PHONE_HREF,
  },
  {
    icon: MapPin,
    tile: "border-transparent bg-gradient-to-br from-[#78350F] via-[#B45309] to-[#F59E0B] text-white",
    tileHover:
      "group-hover:border-[#F59E0B]/25 group-hover:from-[#FFF6E9] group-hover:via-[#FDEBD0] group-hover:to-[#FAD7A8] group-hover:text-[#B45309] group-hover:shadow-[0_8px_24px_-8px_rgba(245,158,11,0.55)]",
    label: "Ubicación",
    value: "Perú · GMT-5 - remoto y presencial",
    href: null,
  },
];

const SOCIALS = [
  {
    icon: Github,
    tile: "border-transparent bg-gradient-to-br from-black via-[#232323] to-[#3D3D3D] text-white",
    tileHover:
      "group-hover:border-black/10 group-hover:from-white group-hover:via-[#F1F1F3] group-hover:to-[#D9D9DE] group-hover:text-[#181717] group-hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)]",
    label: "GitHub",
    detail: "github.com/M1GaNg",
    href: "https://github.com/M1GaNg",
  },
  {
    icon: Linkedin,
    tile: "border-transparent bg-gradient-to-br from-[#063267] via-[#0A66C2] to-[#2F8FE0] text-white",
    tileHover:
      "group-hover:border-[#0A66C2]/25 group-hover:from-[#EFF6FF] group-hover:via-[#DCEBFD] group-hover:to-[#B9D6FA] group-hover:text-[#0A66C2] group-hover:shadow-[0_8px_24px_-8px_rgba(10,102,194,0.6)]",
    label: "LinkedIn",
    detail: "Perfil profesional",
    href: "https://linkedin.com",
  },
  {
    icon: Twitter,
    tile: "border-transparent bg-gradient-to-br from-black via-[#1C1C1E] to-[#3A3A3C] text-white",
    tileHover:
      "group-hover:border-black/10 group-hover:from-white group-hover:via-[#F4F4F5] group-hover:to-[#D4D4D8] group-hover:text-black group-hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)]",
    label: "X (Twitter)",
    detail: "Perfil en X",
    href: "https://twitter.com",
  },
  {
    icon: Instagram,
    tile: "border-transparent bg-gradient-to-br from-[#4F5BD5] via-[#962FBF] to-[#D62976] text-white",
    tileHover:
      "group-hover:border-[#D62976]/25 group-hover:from-[#FFF7E8] group-hover:via-[#FCE0EC] group-hover:to-[#E7D8FA] group-hover:text-[#C13584] group-hover:shadow-[0_8px_24px_-8px_rgba(214,41,118,0.6)]",
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
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-3 lg:px-8 lg:py-3 xl:px-10 flex flex-col min-h-0 min-w-0 font-roboto overflow-y-auto lg:overflow-hidden selection:bg-white/20 selection:text-white [-webkit-tap-highlight-color:transparent]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 flex-1 min-h-0 min-w-0 lg:overflow-hidden">
        {/* ── Formulario protagonista ─────────────────────────── */}
        <motion.section
          {...rise(0)}
          aria-labelledby="contact-form-title"
          className="card-glass lg:col-span-7 p-5 lg:p-6 bg-[#0a0a0a90] border-white/5 rounded-2xl flex flex-col min-h-0 min-w-0 lg:overflow-hidden"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2
                id="contact-form-title"
                className="font-clash text-[28px] lg:text-[32px] font-semibold tracking-tight leading-tight text-white text-balance"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-gradient-to-r from-[#151515] via-black to-[#2E2E2E] px-5 h-12 text-[15px] font-semibold text-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-[1px] hover:border-transparent hover:from-zinc-100 hover:via-white hover:to-zinc-200 hover:text-zinc-950 hover:shadow-[0_12px_36px_-10px_rgba(255,255,255,0.45)] active:translate-y-0 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
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
        </motion.section>

        {/* ── Columna lateral seccionada: canales + redes + urgente ── */}
        <motion.aside
          {...rise(0.1)}
          aria-label="Canales directos y redes sociales"
          className="lg:col-span-5 min-h-0 min-w-0 flex flex-col lg:overflow-hidden"
        >
          <div className="card-glass bg-[#0a0a0a90] border-white/5 rounded-2xl p-3 flex flex-col gap-1 min-h-0 lg:overflow-y-auto">
            <p className="flex items-center gap-1.5 px-2 pt-1 text-[13px] font-medium text-white/55">
              <Clock aria-hidden="true" className="size-4 shrink-0" />
              Respuesta en menos de 24 h · Lun-Vie
            </p>

            <ul className="flex flex-col">
              {CHANNELS.map(({ icon: Icon, tile, tileHover, label, value, href, action }) => (
                <li key={label}>
                  <div className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-1.5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-xl border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:-translate-y-[1px]",
                        tile,
                        tileHover,
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
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-[1px] hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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

            <div aria-hidden="true" className="mx-2 my-1 h-px shrink-0 bg-white/8" />

            <p className="px-2 text-[13px] font-medium text-white/55">Redes</p>
            <ul className="grid grid-cols-2 gap-0.5">
              {SOCIALS.map(({ icon: Icon, tile, tileHover, label, detail, href }) => (
                <li key={label} className="min-w-0">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} - abrir perfil en una pestaña nueva`}
                    className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-1.5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-xl border shadow-[0_2px_10px_-4px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:-translate-y-[1px]",
                        tile,
                        tileHover,
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

            <div aria-hidden="true" className="mx-2 my-1 h-px shrink-0 bg-white/8" />

            <a
              href="https://www.cvresume.dev/m1gang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver CV - abrir en una pestaña nueva"
              className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-1.5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-xl border border-transparent bg-gradient-to-br from-[#065F46] via-[#059669] to-[#34D399] text-white transition-all duration-300 group-hover:-translate-y-[1px] group-hover:border-[#34D399]/25 group-hover:from-[#ECFDF5] group-hover:via-[#D1FAE5] group-hover:to-[#A7F3D0] group-hover:text-[#065F46] group-hover:shadow-[0_8px_24px_-8px_rgba(52,211,153,0.55)]"
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
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default Contact;
