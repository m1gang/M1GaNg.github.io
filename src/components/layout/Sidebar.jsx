import { motion } from "motion/react";
import SidebarLink from "./SidebarLink";
import { MAIN_NAV_ITEMS } from "../../constants/navigation";

const Sidebar = ({ mainSection }) => {
  return (
    <motion.header
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="flex justify-center items-center w-full fixed z-100 lg:w-1/5 lg:relative h-auto font-clash bottom-5 lg:bottom-0 lg:h-full lg:flex-col"
    >
      <nav className="card-glass flex lg:flex-col p-2 lg:p-3 sm:gap-5 justify-center border-indigo-500">
        {MAIN_NAV_ITEMS.map((item) => (
          <SidebarLink
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            active={mainSection === item.section}
          />
        ))}
      </nav>
    </motion.header>
  );
};

export default Sidebar;
