import { Outlet, useLocation } from "react-router";
import { MouseTrail } from "../components/MouseTrail";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Sidebar from "../components/layout/Sidebar";
import SubNavbar from "../components/layout/SubNavbar";
import { SUB_NAV_CONFIG } from "../constants/navigation";

const MainLayout = () => {
  const location = useLocation();

  // Obtener la sección principal del path
  const pathParts = location.pathname.split("/").filter(Boolean);
  const mainSection = pathParts[0] || "inicio";

  const currentSubNav = SUB_NAV_CONFIG[mainSection] || [];

  return (
    <div
      id="portafolio"
      className="bg-black flex flex-col lg:flex-row h-auto lg:h-screen lg:overflow-hidden w-full dark:bg-black text-white relative "
    >
      <div className=" absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatedBackground />
      </div>
      <MouseTrail />

      {/* Sidebar Navigation */}
      <Sidebar mainSection={mainSection} />

      {/* Main Content Area */}
      <main className="flex flex-col items-center font-roboto w-full h-full overflow-y-auto lg:overflow-hidden z-10 pt-10 lg:pt-0">
        {/* Main Section Title (Top) */}
        <h1 className="text-4xl p-2 font-thin font-sawbones uppercase tracking-widest">
          {mainSection}
        </h1>

        {/* Sub-Navigation (Top Nav) */}
        <SubNavbar items={currentSubNav} />

        {/* Content Outlet */}
        <div className="flex-1 w-full overflow-hidden flex flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
