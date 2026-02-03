import { Outlet, NavLink, useLocation } from "react-router";
import Icon from "../components/Icon";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import AnimatedBackground from "../components/AnimatedBackground";
import { MouseTrail } from "../components/MouseTrail";

const MainLayout = () => {
  const location = useLocation();

  // Obtener la sección principal y sub-sección del path
  const pathParts = location.pathname.split("/").filter(Boolean);
  const mainSection = pathParts[0] || "inicio";

  // Configuración de sub-navegación por sección
  const subNavConfig = {
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
        label: "Condisa Romero",
        path: "/experiencia/condisa",
        isDefault: true,
      },
      { label: "UNCP", path: "/experiencia/uncp" },
    ],
    proyectos: [
      { label: "Mini Apps", path: "/proyectos/miniapps", isDefault: true },
      { label: "Apps React", path: "/proyectos/react" },
      { label: "Empresa Condisa", path: "/proyectos/condisa" },
    ],

    contacto: [
      { label: "Contacto" }
    ]

    // Añadir más según sea necesario
  };

  const currentSubNav = subNavConfig[mainSection] || [];

  return (
    <div
      id="portafolio"
      className="flex flex-col lg:flex-row h-auto lg:h-screen lg:overflow-hidden w-full invert bg-black text-white relative "
    >
      <AnimatedBackground />
      <MouseTrail />

      {/* Sidebar Navigation */}
      <motion.header
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        className="flex justify-center items-center w-full fixed z-100 lg:w-1/5 lg:relative h-auto font-clash bottom-5"
      >
        <nav className="card-glass flex lg:flex-col p-2 lg:p-5 sm:gap-5 justify-center border-indigo-500">
          <SidebarLink
            to="/inicio"
            icon="home"
            label="INICIO"
            active={mainSection === "inicio"}
          />
          <SidebarLink
            to="/perfil"
            icon="user"
            label="PERFIL"
            active={mainSection === "perfil"}
          />
          <SidebarLink
            to="/proyectos"
            icon="folder"
            label="PROYECTOS"
            active={mainSection === "proyectos"}
          />
          <SidebarLink
            to="/experiencia"
            icon="road"
            label="EXPERIENCIA"
            active={mainSection === "experiencia"}
          />
          <SidebarLink
            to="/contacto"
            icon="contact"
            label="CONTACTO"
            active={mainSection === "contacto"}
          />
        </nav>
      </motion.header>

      {/* Main Content Area */}
      <main className="flex flex-col items-center font-roboto w-full h-full overflow-y-auto lg:overflow-hidden z-10 pt-10 lg:pt-0">
        {/* Main Section Title (Top) */}
        <motion.h1
          className="text-4xl p-2 font-thin font-sawbones uppercase tracking-widest"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          {mainSection}
        </motion.h1>

        {/* Sub-Navigation (Top Nav) */}
        {currentSubNav.length > 0 && (
          <motion.div
            className="nav-vertical p-2 mt-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <nav className="card-glass flex py-1 px-1 gap-2 bg-[#29292980]">
              {currentSubNav.map((sub) => (
                <NavLink
                  key={sub.path}
                  to={sub.path}
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-[25px] transition-all duration-300 text-sm font-medium ${isActive
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {sub.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}

        {/* Content Outlet */}
        <div className="flex-1 w-full overflow-hidden flex flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const SidebarLink = ({ to, icon, label, active }) => (
  <NavLink
    to={to}
    className={() =>
      `flex items-center w-[70px] lg:w-full md:w-full flex-col md:flex-row md:gap-1 md:p-2 lg:gap-3 lg:p-3 transition-all duration-500 rounded-xl ${active
        ? "bg-white/15 text-white shadow-lg shadow-white/5 border border-white/10"
        : "text-white/50 hover:text-white hover:bg-white/5"
      }`
    }
  >
    <Icon
      name={active ? `${icon}-solid` : icon}
      fill={active ? "white" : "#6C6C6C"}
      size={28}
    />
    <span
      className={`font-medium text-[10px] md:text-[15px] lg:text-[18px] leading-none tracking-tight ${active ? "opacity-100" : "opacity-80"
        }`}
    >
      {label}
    </span>
  </NavLink>
);

export default MainLayout;
