
import Layout from '../components/Layout';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <Layout>
      <Section
        title="Projects"
        description="A collection of my professional work and side projects in the DevOps space."
        className="mt-8"
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
          <ProjectCard
            title="Container Security Scanner"
            description="A tool that scans container images for vulnerabilities and provides remediation recommendations."
            tags={["Docker", "Security", "Python", "CI"]}
            githubUrl="https://github.com/username/container-scanner"
          />
          <ProjectCard
            title="AWS Cost Optimization Tool"
            description="Scripts and dashboards for identifying cost-saving opportunities in AWS environments."
            tags={["AWS", "Cost Optimization", "Python", "CloudWatch"]}
            githubUrl="https://github.com/username/aws-cost-optimizer"
          />
          <ProjectCard
            title="Multi-Cloud Backup Solution"
            description="A system for automating backups across multiple cloud providers with encryption and validation."
            tags={["AWS", "GCP", "Backup", "Bash"]}
            githubUrl="https://github.com/username/multi-cloud-backup"
          />
          <ProjectCard
            title="Self-Healing Infrastructure"
            description="Automation scripts that detect and remediate common infrastructure issues without human intervention."
            tags={["Python", "AWS Lambda", "Automation", "Resilience"]}
            githubUrl="https://github.com/username/self-healing-infra"
          />
        </div>
      </Section>
    </Layout>
  );
};

export default Projects;
