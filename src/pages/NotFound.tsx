
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Terminal } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <Terminal size={64} className="text-primary mb-6" />
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">404: Page Not Found</h1>
        <p className="text-lg text-foreground/80 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <div className="flex space-x-4">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center bg-secondary text-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/70 transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
