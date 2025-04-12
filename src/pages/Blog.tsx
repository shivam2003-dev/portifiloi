
import { useState } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const posts = [
    {
      id: "kubernetes-secrets-management",
      title: "Kubernetes Secrets Management Best Practices",
      excerpt: "A deep dive into secure handling of secrets in Kubernetes environments, with practical examples.",
      date: "2023-10-15",
      tags: ["Kubernetes", "Security", "Best Practices"],
    },
    {
      id: "terraform-modules",
      title: "Building Reusable Terraform Modules for Your Organization",
      excerpt: "How to structure Terraform code for maximum reusability while maintaining consistency across teams.",
      date: "2023-08-22",
      tags: ["Terraform", "IaC", "Best Practices"],
    },
    {
      id: "ci-cd-optimization",
      title: "Optimizing CI/CD Pipelines for Speed and Reliability",
      excerpt: "Techniques to make your continuous integration and deployment processes faster and more dependable.",
      date: "2023-07-10",
      tags: ["CI/CD", "Performance", "DevOps"],
    },
    {
      id: "container-security",
      title: "Container Security: Beyond the Basics",
      excerpt: "Advanced techniques for securing your containerized applications from development to production.",
      date: "2023-06-18",
      tags: ["Containers", "Docker", "Security"],
    },
    {
      id: "cloud-cost-optimization",
      title: "Practical Cloud Cost Optimization Strategies",
      excerpt: "Real-world approaches to reduce your cloud bills without sacrificing performance or reliability.",
      date: "2023-05-05",
      tags: ["Cloud", "AWS", "Cost Optimization"],
    },
    {
      id: "gitops-implementation",
      title: "Implementing GitOps in Enterprise Environments",
      excerpt: "A step-by-step guide to adopting GitOps workflows in large organizations with multiple teams.",
      date: "2023-04-12",
      tags: ["GitOps", "DevOps", "Enterprise"],
    },
  ];

  // Extract unique categories from all post tags
  const categories = ['all', ...Array.from(new Set(posts.flatMap(post => post.tags)))].sort();
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.tags.includes(activeCategory));

  return (
    <Layout>
      <Section
        title="Technical Blog"
        description="Articles, tutorials and insights on DevOps practices, tools, and methodologies."
        className="mt-8"
      >
        {/* Categories filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog posts */}
        <div className="divide-y divide-border">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogPost
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
              />
            ))
          ) : (
            <p className="py-8 text-center text-foreground/70">No posts found for this category.</p>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;
