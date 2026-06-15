export const MAIN_NAV_ITEMS = [
  { to: "/inicio", icon: "home", label: "INICIO", section: "inicio" },
  { to: "/perfil", icon: "user", label: "PERFIL", section: "perfil" },
  {
    to: "/proyectos",
    icon: "folder",
    label: "PROYECTOS",
    section: "proyectos",
  },
  {
    to: "/experiencia",
    icon: "road",
    label: "EXPERIENCIA",
    section: "experiencia",
  },
  { to: "/contacto", icon: "contact", label: "CONTACTO", section: "contacto" },
];

export const SUB_NAV_CONFIG = {
  inicio: [
    { label: "Portada", path: "/inicio/portada", isDefault: true },
    { label: "Redes", path: "/inicio/redes" },
  ],
  perfil: [
    { label: "Sobre mí", path: "/perfil/sobre-mi", isDefault: true },
    { label: "Educación", path: "/perfil/educacion" },
    { label: "Habilidades", path: "/perfil/habilidades" },
  ],
  experiencia: [
    {
      label: "Devdatep",
      path: "/experiencia/devdatep",
      isDefault: true,
    },
    {
      label: "Condisa",
      path: "/experiencia/condisa",
    },
    { label: "UNCP", path: "/experiencia/uncp" },
  ],
  proyectos: [
    { label: "Mini Apps", path: "/proyectos/miniapps", isDefault: true },
    { label: "Apps React", path: "/proyectos/react" },
    { label: "Condisa", path: "/proyectos/condisa" },
  ],
  contacto: [{ label: "Contacto", path: "/contacto" }],
};
