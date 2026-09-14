import Icon from "./Icon";
import { cn } from "@/lib/utils";

const TechBadge = ({
  name,
  icon,
  lucideIcon: LucideIcon,
  iconSize = 20,
  iconClassName = "",
  textClassName = "text-sm font-medium text-white/80",
  className = "",
}) => (
  <div
    className={cn(
      "flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-default",
      className,
    )}
  >
    {LucideIcon ? (
      <LucideIcon size={iconSize} className={iconClassName} />
    ) : (
      <Icon name={icon} size={iconSize} className={iconClassName} />
    )}
    <span className={textClassName}>{name}</span>
  </div>
);

export default TechBadge;
