
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock = ({ code, language = 'bash', className }: CodeBlockProps) => {
  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      <div className="bg-foreground/10 px-4 py-2 text-sm font-mono flex items-center justify-between">
        <span>{language}</span>
      </div>
      <pre className="p-4 bg-secondary/50 overflow-x-auto">
        <code className="text-sm md:text-base font-mono">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
