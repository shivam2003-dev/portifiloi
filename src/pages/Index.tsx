
import { ArrowRight, Terminal, Server, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import BlogPost from '../components/BlogPost';

const Index = () => {
  const skills = [
    { name: 'Docker', category: 'Container' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'CI/CD', category: 'Pipeline' },
    { name: 'Ansible', category: 'Configuration' },
    { name: 'Jenkins', category: 'Automation' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Linux', category: 'OS' },
    { name: 'Python', category: 'Scripting' },
    { name: 'Bash', category: 'Scripting' },
  ];

  const introCode = `#!/bin/bash
echo "Hello, I'm Shivam"
echo "DevOps Engineer specializing in infrastructure automation"
echo "Let's build reliable, scalable systems together"`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-mono text-primary">Hi there, I'm</span>
              <h1 className="font-mono text-4xl md:text-5xl font-bold mt-2 mb-4">Shivam</h1>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 mb-6">
                DevOps Engineer &amp; Infrastructure Specialist
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                I help organizations build robust, scalable infrastructure and streamline their 
                development pipelines. Specializing in cloud automation, containerization, and CI/CD.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/projects" 
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  View Projects
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center bg-secondary text-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/70 transition-colors"
                >
                  More About Me
                </Link>
              </div>
            </div>
            <div>
              <CodeBlock code={introCode} language="bash" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Section 
        id="skills" 
        title="Skills & Expertise"
        description="My technical toolkit includes various DevOps technologies and practices."
      >
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge 
              key={skill.name} 
              name={`${skill.name} (${skill.category})`} 
            />
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section 
        id="featured-projects" 
        title="Featured Projects"
        description="Here are some of my recent projects and contributions."
        className="bg-secondary/30"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Kubernetes Deployment Framework"
            description="A framework for standardizing Kubernetes deployments across multiple environments with built-in security controls."
            tags={["Kubernetes", "Helm", "GitOps", "Security"]}
            githubUrl="https://github.com/username/k8s-framework"
          />
          <ProjectCard
            title="Infrastructure as Code Templates"
            description="Collection of reusable Terraform modules for quick deployment of cloud infrastructure following best practices."
            tags={["Terraform", "AWS", "IaC", "Modules"]}
            githubUrl="https://github.com/username/terraform-templates"
          />
          <ProjectCard
            title="CI/CD Pipeline Automation"
            description="A set of Jenkins pipelines and GitHub Actions workflows to automate testing and deployment processes."
            tags={["Jenkins", "GitHub Actions", "CI/CD", "Automation"]}
            githubUrl="https://github.com/username/cicd-automation"
          />
          <ProjectCard
            title="Monitoring Stack"
            description="Comprehensive monitoring solution with Prometheus, Grafana, and alerting for infrastructure and applications."
            tags={["Prometheus", "Grafana", "Monitoring", "Alerting"]}
            githubUrl="https://github.com/username/monitoring-stack"
          />
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all projects
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </Section>

      {/* Recent Blog Posts */}
      <Section 
        id="blog" 
        title="Technical Articles"
        description="Thoughts, tutorials, and insights on DevOps practices and tools."
      >
        <div className="space-y-6">
          <BlogPost
            id="kubernetes-secrets-management"
            title="Kubernetes Secrets Management Best Practices"
            excerpt="A deep dive into secure handling of secrets in Kubernetes environments, with practical examples."
            date="2023-10-15"
            tags={["Kubernetes", "Security", "Best Practices"]}
          />
          <BlogPost
            id="terraform-modules"
            title="Building Reusable Terraform Modules for Your Organization"
            excerpt="How to structure Terraform code for maximum reusability while maintaining consistency across teams."
            date="2023-08-22"
            tags={["Terraform", "IaC", "Best Practices"]}
          />
          <BlogPost
            id="ci-cd-optimization"
            title="Optimizing CI/CD Pipelines for Speed and Reliability"
            excerpt="Techniques to make your continuous integration and deployment processes faster and more dependable."
            date="2023-07-10"
            tags={["CI/CD", "Performance", "DevOps"]}
          />
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            Read more articles
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </Section>

      {/* Contact/Services Section */}
      <Section 
        id="what-i-do" 
        title="Services"
        description="Key areas where I can help your organization succeed."
        className="bg-secondary/30"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
            <Server className="text-primary mb-4" size={24} />
            <h3 className="font-mono text-xl font-semibold mb-2">Infrastructure Automation</h3>
            <p className="text-foreground/80">
              Building cloud environments with infrastructure as code for reliability and scalability.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
            <Terminal className="text-primary mb-4" size={24} />
            <h3 className="font-mono text-xl font-semibold mb-2">CI/CD Pipeline Design</h3>
            <p className="text-foreground/80">
              Creating efficient delivery pipelines for faster, more reliable software releases.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
            <Code className="text-primary mb-4" size={24} />
            <h3 className="font-mono text-xl font-semibold mb-2">DevOps Consulting</h3>
            <p className="text-foreground/80">
              Helping teams implement DevOps practices and improve their development workflows.
            </p>
          </div>
          <div className="border border-border rounded-lg p-5 hover:border-primary transition-colors">
            <Database className="text-primary mb-4" size={24} />
            <h3 className="font-mono text-xl font-semibold mb-2">Container Orchestration</h3>
            <p className="text-foreground/80">
              Setting up and managing Kubernetes clusters for running containerized applications.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
