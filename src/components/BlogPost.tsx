
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  className?: string;
}

const BlogPost = ({
  id,
  title,
  excerpt,
  date,
  tags,
  className,
}: BlogPostProps) => {
  return (
    <article className={cn("border-b border-border py-6 last:border-0", className)}>
      <Link to={`/blog/${id}`} className="group">
        <h3 className="font-mono text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </Link>
      <div className="flex items-center text-sm text-foreground/70 mb-3">
        <Calendar size={14} className="mr-1" />
        <time dateTime={date}>{date}</time>
      </div>
      <p className="text-foreground/80 mb-4">{excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="bg-secondary text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default BlogPost;
