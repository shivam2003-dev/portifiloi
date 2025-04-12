
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

1. Create a new repository on GitHub named `shivam-devops-showcase`

2. Initialize the repository and push your code:
```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shivam-devops-showcase.git
git push -u origin main
```

3. Deploy to GitHub Pages:
```sh
# The package is already installed
npm run build
npm run deploy
```

4. Go to your repository settings on GitHub:
   - Navigate to Settings > Pages
   - In the "Build and deployment" section, select "Deploy from a branch"
   - Select the "gh-pages" branch and "/ (root)" folder
   - Click Save

5. Your site will be available at: `https://YOUR_USERNAME.github.io/shivam-devops-showcase`

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
