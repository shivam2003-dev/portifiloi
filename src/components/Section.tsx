
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, description, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className="container-content">
        {title && (
          <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4">
            <span className="text-primary">#</span> {title}
          </h2>
        )}
        {description && (
          <p className="text-lg text-foreground/80 max-w-3xl mb-8">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
