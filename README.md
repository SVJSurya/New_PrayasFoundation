# Prayas Foundation Workspace

Welcome to the **Prayas Foundation** workspace repository. This repository contains the source code, design assets, and prototypes for the Prayas Foundation non-governmental organization (NGO) web portal, dedicated to enabling sustainable livelihood opportunities through youth skill development, digital literacy, rural education, and women's empowerment.

## 📂 Workspace Structure

This workspace contains the primary production-ready web application and several prototype directories:

- **[`prayas-foundation/`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation)**: **[Primary Project]** The fully-functional React, TypeScript, and Tailwind CSS v4 web application.
- `stitch_minimalist_professional_ngo_portal (x)`: Multi-version prototypes and design wireframe iterations used during initial planning phases.

---

# 🌐 Prayas Foundation Portal (`prayas-foundation`)

The primary web app is located in the **[`prayas-foundation/`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation)** subdirectory. It is built as a state-of-the-art Single Page Application (SPA) utilizing the latest technologies for performance, rich aesthetics, accessibility, and high visual excellence.

## 🛠️ Technology Stack

- **Core**: React 19 & TypeScript (strict mode)
- **Build System**: Vite 8
- **Styling**: Tailwind CSS v4.x (with modern CSS variables & `@tailwindcss/vite` configuration)
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion v12 (for micro-animations, bento interactions, and slide transitions)
- **Iconography**: React Icons & Material Symbols

---

## ⚡ Quick Start

To run the primary web application locally, ensure you have [Node.js](https://nodejs.org/) installed, and follow these steps:

### 1. Navigate to the project directory
```bash
cd prayas-foundation
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
The application will run locally, typically at `http://localhost:5173`.

### 4. Build for Production
To build the application optimized for production:
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## 🎨 Design System & Aesthetics

The portal uses a highly curated design system built on **Material Design 3 tokens** and custom styling variables, located in [`prayas-foundation/src/index.css`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation/src/index.css):

- **Primary Colors**: Deep Navy Blue (`#00132c`) representing trust, legacy, and commitment.
- **Secondary Colors**: Slate Blue (`#3c5e98`) for subtle secondary accents and subheadings.
- **Tertiary Accent**: Warm Gold (`#f8bd2d` / `#ffdea0`) to highlight calls to action (CTAs), donation impacts, and active states.
- **Bento Grids**: Utilized on the homepage for interactive, modern layout representations of impact statistics.
- **Micro-Animations**: Custom scroll reveal triggers, animated count-ups for data milestones, and fluid menu overlays.

---

## 📐 Architecture & Directory Layout

The `prayas-foundation/src` directory is structured as follows:

- **[`pages/`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation/src/pages)**: Core application views:
  - `Home.tsx` — Hero area, Bento grid stats, featured programs, partner list.
  - `About.tsx` — Organization core values, team structure, and governance.
  - `Story.tsx` — Testimonials slider, photo archive, and press features.
  - `Programs.tsx` — Detailed breakdown of educational and vocational tracks.
  - `Projects.tsx` — Localized project updates and community case studies.
  - `Impact.tsx` — Metrics and qualitative progress analysis.
  - `Donate.tsx` — Interactive step-by-step contribution flow.
  - `Volunteer.tsx` — Support application and volunteer onboarding.
  - `Gallery.tsx` — Filterable photo archive of ground-level events.
  - `Contact.tsx` — Interactive query form with map location reference.
- **[`components/`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation/src/components)**: Reusable components modularized by page context (e.g., `layout`, `home`, `about`, `story`).
- **[`data/`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation/src/data)**: Centralized local data stores for rendering static programs, testimonials, projects, and gallery items.
- **[`hooks/`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation/src/hooks)**: Custom hooks including `useAnimatedCounter` and `useScrollReveal` to encapsulate visual effects logic.
- **[`services/`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation/src/services)**: Content delivery helper utilities.
- **[`utils/`](file:///c:/Users/sddum/Downloads/Prayas-Foundation/prayas-foundation/src/utils)**: Global utilities, such as `cn.ts` for styling composition.
