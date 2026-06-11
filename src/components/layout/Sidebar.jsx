import SidebarLink from "./SidebarLink";
import { MAIN_NAV_ITEMS } from "../../constants/navigation";

const Sidebar = ({ mainSection }) => {
  return (
    <header
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
    </header>
  );
};

export default Sidebar;
