import HomeOutline from "../components/icons/nav/home-outline.svg?react";
import HomeFill from "../components/icons/nav/home-fill.svg?react";
import UserOutline from "../components/icons/nav/user-outline.svg?react";
import UserFill from "../components/icons/nav/user-fill.svg?react";
import FolderOutline from "../components/icons/nav/folder-outline.svg?react";
import FolderFill from "../components/icons/nav/folder-fill.svg?react";
import RoadOutline from "../components/icons/nav/road-outline.svg?react";
import RoadFill from "../components/icons/nav/road-fill.svg?react";
import ContactOutline from "../assets/svg/contact.svg?react";
import ContactFill from "../assets/svg/contacto-fill.svg?react";

export const MAIN_NAV_ITEMS = [
  { to: "/inicio", Outline: HomeOutline, Fill: HomeFill, label: "INICIO", section: "inicio" },
  { to: "/perfil", Outline: UserOutline, Fill: UserFill, label: "PERFIL", section: "perfil" },
  {
    to: "/proyectos",
    Outline: FolderOutline,
    Fill: FolderFill,
    label: "PROYECTOS",
    section: "proyectos",
  },
  {
    to: "/experiencia",
    Outline: RoadOutline,
    Fill: RoadFill,
    label: "EXPERIENCIA",
    section: "experiencia",
  },
  { to: "/contacto", Outline: ContactOutline, Fill: ContactFill, label: "CONTACTO", section: "contacto" },
];

export const SUB_NAV_CONFIG = {
  inicio: [
    { label: "Portada", path: "/inicio/portada", isDefault: true },
  ],
  perfil: [
    { label: "Sobre mí", path: "/perfil/sobre-mi", isDefault: true },
    { label: "Educación", path: "/perfil/educacion" },
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
    { label: "Apps", path: "/proyectos/apps", isDefault: true },
    { label: "Condisa", path: "/proyectos/condisa" },
  ],
  contacto: [{ label: "Contacto", path: "/contacto" }],
};
