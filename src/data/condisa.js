// Datos de los proyectos de Condisa Romero (página /proyectos/condisa).
import ReactIcon from "../components/icons/tech/react.svg?react";
import ViteIcon from "../components/icons/tech/vitejs.svg?react";
import CssIcon from "../components/icons/tech/css.svg?react";
import ResponsiveIcon from "../components/icons/tech/responsive.svg?react";
import PhpIcon from "../components/icons/tech/php.svg?react";
import MysqlIcon from "../components/icons/tech/mysql.svg?react";
import JavascriptIcon from "../components/icons/tech/javascript.svg?react";
import BootstrapIcon from "../components/icons/tech/bootstrap.svg?react";
import JqueryIcon from "../components/icons/tech/jquery.svg?react";
import webCondisaIcon from "../assets/img/icon-projects/web-condisa.webp";
import posCondisaIcon from "../assets/img/icon-projects/pos-condisa.webp";
import website1 from "../assets/img/projects/condisa/website-condisa-romero-1.webp";
import website2 from "../assets/img/projects/condisa/website-condisa-romero-2.webp";
import website3 from "../assets/img/projects/condisa/website-condisa-romero-3.webp";
import pos1 from "../assets/img/projects/condisa/pos-libreria-1.webp";
import pos2 from "../assets/img/projects/condisa/pos-libreria-2.webp";
import pos3 from "../assets/img/projects/condisa/pos-libreria-3.webp";

export const CONDISA_PROJECTS = {
  website: {
    id: "website",
    title: "Website Condisa Romero",
    description:
      "Sitio web corporativo para una empresa de construcción y servicios. Desarrollado para fortalecer la presencia digital y facilitar el contacto con clientes. Cuenta con secciones de servicios, proyectos y blog, optimizado para SEO y rendimiento.",
    icon: webCondisaIcon,
    iconAlt: "Website Condisa Romero",
    images: [website1, website2, website3],
    techs: [
      { Icon: ReactIcon, name: "React", color: "text-cyan-400" },
      { Icon: ViteIcon, name: "Vite", color: "text-purple-500" },
      { Icon: CssIcon, name: "CSS", color: "text-blue-600" },
      { Icon: ResponsiveIcon, name: "Responsive", color: "text-green-500" },
    ],
    repoUrl: "https://github.com/m1gang/website-condisa-romero",
  },
  pos: {
    id: "pos",
    title: "Sistema POS Librería",
    description:
      "Sistema de Punto de Venta (POS) completo para la gestión de inventario y ventas de una librería. Incluye manejo de productos, control de stock, generación de reportes y facturación. Desarrollado con PHP y MySQL para una gestión robusta de datos.",
    icon: posCondisaIcon,
    iconAlt: "Sistema POS Librería",
    images: [pos1, pos2, pos3],
    techs: [
      { Icon: PhpIcon, name: "PHP" },
      { Icon: MysqlIcon, name: "MySQL" },
      { Icon: JavascriptIcon, name: "JS" },
      { Icon: BootstrapIcon, name: "Bootstrap" },
      { Icon: JqueryIcon, name: "jquery" },
    ],
    repoUrl: "https://github.com/m1gang/pos-system-php",
  },
};
