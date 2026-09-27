import { cn } from "@/lib/utils";

const TechBadge = ({
  name,
  icon: IconComponent,
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
    {IconComponent && (
      <IconComponent
        width={iconSize}
        height={iconSize}
        className={iconClassName}
        aria-hidden="true"
      />
    )}
    <span className={textClassName}>{name}</span>
  </div>
);

export default TechBadge;
