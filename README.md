
# Shivam's DevOps Portfolio

A clean, minimalist portfolio website built for showcasing DevOps engineering skills and projects. Designed with a technical aesthetic similar to MIT's Missing Semester site.

## Project info

**URL**: https://lovable.dev/projects/92838b32-f46d-42f3-814e-3e332c11708c

## Features
- Responsive design with a technical/academic aesthetic
- Project showcase section
- Technical blog/articles section
- Skills and expertise display
- Experience timeline
- GitHub integration

## Tech Stack
- React with TypeScript
- TailwindCSS for styling
- React Router for navigation

## Deployment to GitHub Pages

To deploy this portfolio to GitHub Pages:

1. Create a GitHub repository for your portfolio
2. Configure your project for GitHub Pages:

```sh
# Install gh-pages package
npm install --save-dev gh-pages

# Add these scripts to package.json
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
```

3. Add homepage field to package.json:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

4. Deploy the site:
```sh
npm run deploy
```

5. Configure GitHub Pages in your repository settings to use the gh-pages branch

## Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the development server
npm run dev
```

## Customizing Content

The site content can be customized by editing the appropriate components:
- Update personal information and introduction in the Index.tsx file
- Add your own projects in Projects.tsx
- Add your own blog posts in Blog.tsx
- Update your skills, experience, and education in About.tsx

## License
MIT

