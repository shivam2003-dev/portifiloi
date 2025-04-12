
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div className={cn("border border-border rounded-lg overflow-hidden card-hover", className)}>
      <div className="p-5">
        <h3 className="font-mono text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/80 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-secondary text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-foreground/90 hover:text-primary transition-colors"
            >
              <Github size={16} className="mr-1" />
              Source
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-foreground/90 hover:text-primary transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
