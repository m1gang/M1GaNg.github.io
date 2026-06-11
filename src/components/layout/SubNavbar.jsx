import { NavLink } from "react-router";

const SubNavbar = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="nav-vertical p-2 mt-2">
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
    </div>
  );
};

export default SubNavbar;
