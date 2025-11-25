# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, showcasing projects, skills, and professional information. The site is deployed to Netlify at https://bruce-bruno.netlify.app.

## Development Commands

### Running the Application
- `npm start` - Start development server (opens at http://localhost:3000)
- `npm run build` - Build production bundle to `build/` directory
- `npm test` - Run tests in interactive watch mode

### Testing
The project uses React Testing Library with Jest. To run specific tests:
- `npm test -- <test-file-name>` - Run a single test file
- `npm test -- --coverage` - Run tests with coverage report

## Architecture

### Component Structure

The application follows a single-page layout structure with section-based navigation:

- **App.js** - Root component that composes all page sections vertically
- **src/components/** - All UI components organized as feature-based sections:
  - `Navbar.js` - Top navigation with anchor links to sections and social media icons
  - `Home.js` - Hero/landing section
  - `About.js` - Professional bio section
  - `Skills.js` - Technical skills organized by category (languages, frameworks, tools, databases)
  - `Projects.js` - Project showcase section containing project data array
  - `Footer.js` - Footer section
  - `ProjectContainer.js` - Reusable card component for individual projects with hover effects
  - `SectionTitle.js` - Reusable styled title component for sections
  - `DownloadModal.js` - Modal component for resume download (located in navbar)
  - `FadeInOnScroll.js` - Wrapper component providing scroll-based fade-in animations using IntersectionObserver

### Data Management

Project and skill data are stored in JSON files for easier management:
- **`src/data/projects.json`** - Array of project objects
- **`src/data/skills.json`** - Object with skill categories

These files are imported directly into their respective components at build time.

### Key Patterns

1. **Data-Driven Components**: Skills and Projects components import their data from JSON files in `src/data/`:
   - `Skills.js` imports from `src/data/skills.json`
   - `Projects.js` imports from `src/data/projects.json`

2. **Animation System**: Components use `FadeInOnScroll` wrapper to add entrance animations triggered by scroll position. The component uses IntersectionObserver API with a 0.1 threshold.

3. **Asset References**: Images are referenced using `process.env.PUBLIC_URL` prefix for proper build resolution:
   ```javascript
   src={`${process.env.PUBLIC_URL}/image.png`}
   ```

4. **Styling**: Each component has a corresponding CSS file with the same name (e.g., `Skills.js` → `Skills.css`). No CSS-in-JS or CSS modules used.

5. **Navigation**: Uses hash-based anchor navigation (`#home`, `#about`, etc.) with `id` attributes on section elements. React Router is included in the project but only wraps the app (no routing configured).

### Component Dependencies

- **Material-UI (@mui/material)** - Used selectively for certain components
- **FontAwesome** - Icon library for social media and UI icons
- **react-scroll** - Installed but verify usage before assuming smooth scroll behavior

### Public Assets

The `public/` directory contains:
- Project screenshots (must be 1280x750 per comment in Projects.js)
- `avatar.png` - Profile image
- `skills.png` - Skills section image
- `bruce_bruno_f_resume.pdf` - Resume file
- Standard CRA assets (favicon, logos, manifest)

## Adding Content

### Adding a New Project

1. Add project image (1280x750 pixels) to `public/` directory
2. Edit `src/data/projects.json` and add a new object:
   ```json
   {
     "name": "Project Name",
     "url": "https://github.com/username/repo",
     "imgSrc": "/project_image.jpg",
     "skills": ["Skill1", "Skill2"],
     "description": "Project description..."
   }
   ```
3. Rebuild and redeploy

### Adding/Editing Skills

Edit `src/data/skills.json` to modify skill categories. The structure is:
```json
{
  "category_name": ["Skill 1", "Skill 2", ...]
}
```

## Important Notes

- **Image Dimensions**: Project images should be 1280x750 pixels
- **Image Paths**: In JSON files, use paths relative to `public/` (e.g., `/image.jpg` not full path)
- **Rebuild Required**: Changes to JSON files require `npm run build` and redeployment
- **Homepage Config**: The `homepage` field in package.json is set to the Netlify deployment URL
- **No Backend**: This is a static frontend application with no API integrations or backend services
