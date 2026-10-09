// Datos de contacto compartidos por la portada y la página de contacto.
// Fuente única: si cambia el correo o la ubicación, se cambia aquí.
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const EMAIL = "miguelangelyv1@gmail.com";
export const LOCATION_LABEL = "Perú · GMT-5 · Remoto o presencial";

export const GITHUB_URL = "https://github.com/M1GaNg";
export const CV_URL = "https://www.cvresume.dev/m1gang";

export const PHONE_LABEL = "+51 954 936 677";
export const PHONE_HREF = "tel:+51954936677";
export const WHATSAPP_HREF = "https://wa.me/51954936677";
export const MESSAGE_MAX = 1000;

export const TILE_CLS =
  "bg-white/5 border-white/10 text-white/80 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white";

export const inputCls =
  "w-full bg-white/5 border border-white/10 rounded-xl text-[15px] leading-relaxed text-white placeholder:text-white/60 caret-white selection:bg-white/20 selection:text-white transition-[border-color,background-color,box-shadow] duration-200 hover:border-white/20 focus:border-white/40 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-white/15";

// Tira de redes — pie de la página de Contacto.
export const SOCIALS = [
  { icon: Github, label: "GitHub", href: GITHUB_URL },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Twitter,
    label: "X",
    href: "https://twitter.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
];
