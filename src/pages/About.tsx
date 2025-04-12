
import Layout from '../components/Layout';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';
import { Download, Mail } from 'lucide-react';

const About = () => {
  const experienceCode = `
# Professional Experience
[2021 - Present] Senior DevOps Engineer @ TechCorp
- Led cloud migration to AWS using Terraform and CloudFormation
- Implemented Kubernetes-based microservice platform
- Reduced deployment time by 70% through CI/CD optimization

[2018 - 2021] DevOps Engineer @ InnoSystems
- Automated infrastructure provisioning with Ansible and Terraform
- Built monitoring solutions with Prometheus and Grafana
- Implemented GitOps workflow for application deployments

[2016 - 2018] Systems Administrator @ DataNet
- Managed Linux server infrastructure and networking
- Implemented backup and disaster recovery solutions
- Migrated on-prem services to cloud platforms
`;

  return (
    <Layout>
      <Section
        title="About Me"
        description="Learn more about my background, experience, and approach to DevOps."
        className="mt-8"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-xl font-semibold mb-4">Background</h3>
            <div className="space-y-4 text-foreground/90">
              <p>
                I'm a DevOps Engineer with over 6 years of experience building and maintaining robust infrastructure
                and deployment pipelines. My journey in tech started with Linux system administration, which evolved
                into a passion for automation and cloud infrastructure.
              </p>
              <p>
                I specialize in containerization, infrastructure as code, CI/CD pipelines, and cloud platforms. 
                My goal is to help development teams deliver software more efficiently by removing 
                infrastructure-related bottlenecks.
              </p>
              <p>
                When I'm not automating infrastructure, you'll find me contributing to open-source projects, 
                writing technical articles, or exploring new technologies in the DevOps ecosystem.
              </p>
            </div>

            <h3 className="font-mono text-xl font-semibold mt-8 mb-4">Education & Certifications</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>B.Tech in Computer Science & Engineering</li>
              <li>AWS Certified DevOps Engineer - Professional</li>
              <li>Certified Kubernetes Administrator (CKA)</li>
              <li>HashiCorp Certified Terraform Associate</li>
              <li>Linux Foundation Certified System Administrator</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="inline-flex items-center justify-center bg-secondary text-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/70 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Contact Me
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-xl font-semibold mb-4">Professional Experience</h3>
            <CodeBlock code={experienceCode} language="markdown" />
            
            <h3 className="font-mono text-xl font-semibold mt-8 mb-4">My Approach to DevOps</h3>
            <div className="space-y-4 text-foreground/90">
              <p>
                I believe in a pragmatic approach to DevOps that focuses on solving real business problems rather
                than chasing the latest trends. My philosophy centers around these core principles:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Automation is key</strong> - If a task is done more than once, it should be automated.</li>
                <li><strong>Infrastructure as Code</strong> - All infrastructure should be versioned, testable, and repeatable.</li>
                <li><strong>Monitoring and Observability</strong> - You can't improve what you can't measure.</li>
                <li><strong>Security is not optional</strong> - Security should be built into every layer of the stack.</li>
                <li><strong>Continuous Improvement</strong> - Always look for ways to refine and enhance processes.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
