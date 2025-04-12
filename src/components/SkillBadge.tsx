
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

const SkillBadge = ({ name, icon, className }: SkillBadgeProps) => {
  return (
    <div className={cn(
      "inline-flex items-center px-3 py-1.5 rounded-md bg-secondary text-foreground/90 font-mono text-sm",
      className
    )}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {name}
    </div>
  );
};

export default SkillBadge;
