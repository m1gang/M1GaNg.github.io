import { NavLink } from "react-router";
import Icon from "../Icon";

const SidebarLink = ({ to, icon, label, active }) => (
  <NavLink
    to={to}
    className={() =>
      `flex items-center w-[70px] lg:w-full md:w-full flex-col md:flex-row md:gap-1 md:p-2 lg:gap-3 lg:p-3 transition-all duration-500 rounded-xl ${
        active
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
      className={`font-medium text-[10px] md:text-[15px] lg:text-[18px] leading-none tracking-tight ${
        active ? "opacity-100" : "opacity-80"
      }`}
    >
      {label}
    </span>
  </NavLink>
);

export default SidebarLink;
