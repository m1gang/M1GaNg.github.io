import { NavLink } from "react-router";
import { motion } from "motion/react";

const SubNavbar = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
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
        {items.map((sub) => (
          <NavLink
            key={sub.path || "#"}
            to={sub.path || "#"}
            className={({ isActive }) =>
              `px-4 py-1 rounded-[25px] transition-all duration-300 text-sm font-medium ${
                isActive
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
  );
};

export default SubNavbar;
