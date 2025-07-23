# Portfolio Frontend Project

A modern frontend portfolio website built with React, TypeScript, and Vite for optimal development experience and performance.

## 🚀 Features

- ⚡ **Vite** - Fast development server and optimized builds
- ⚛️ **React 18** - Latest React features with TypeScript support
- 🔷 **TypeScript** - Type safety and enhanced developer experience
- 📦 **Modern Tooling** - ESLint for code quality
- 🔧 **VS Code Integration** - Pre-configured tasks and settings

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **Linting**: ESLint with React and TypeScript rules
- **Package Manager**: npm

## 📋 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── components/     # Reusable React components
├── assets/         # Static assets (images, icons, etc.)
├── App.tsx         # Main App component
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## 🚀 VS Code Integration

This project includes VS Code tasks for:
- **Development**: Press `Ctrl+Shift+P` → `Tasks: Run Task` → `dev`
- **Build**: Press `Ctrl+Shift+P` → `Tasks: Run Task` → `build`
- **Lint**: Press `Ctrl+Shift+P` → `Tasks: Run Task` → `lint`
- **Preview**: Press `Ctrl+Shift+P` → `Tasks: Run Task` → `preview`

## 📝 Development Guidelines

1. Use functional components with TypeScript interfaces
2. Follow React best practices and hooks patterns
3. Maintain proper component structure and organization
4. Use CSS modules or styled-components for styling
5. Run `npm run lint` before committing code

## 🛠️ Customization

You can customize this project by:
- Adding new components in `src/components/`
- Modifying styles in CSS files
- Installing additional dependencies as needed
- Configuring ESLint rules in `eslint.config.js`

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.
