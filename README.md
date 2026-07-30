# AuthBrain Website

Official website for **AuthBrain** — showcasing AI agent labs, research, Python stack services, and intelligent automation solutions.

Built with **[Astro 5](https://astro.build/)**, **[TailwindCSS](https://tailwindcss.com/)**, and **TypeScript**.

---

## 🚀 Tech Stack

- **Framework**: Astro 5 (Static Site Generator)
- **Styling**: Tailwind CSS v3 + PostCSS + Autoprefixer
- **Language**: TypeScript
- **Asset Processing**: Sharp (Image Optimization)

---

## 📁 Project Structure

```text
authbrain_website/
├── src/
│   ├── components/     # Reusable UI components (Header, Footer, Cards, UI elements)
│   ├── content/        # Data collections & markdown schemas
│   ├── layouts/        # Page layouts (Layout.astro)
│   ├── pages/          # Site routes (index, agent-lab, contact, python-stack, research, services)
│   └── styles/         # Global CSS styles and Tailwind imports
├── public/             # Static assets (images, favicon, etc.)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

---

## 🛠️ Development & Commands

### Prerequisites
- **Node.js**: `v18+` or `v20+`
- **Package Manager**: `npm`

### Installation
```bash
npm install
```

### Development Server
Starts local development server with hot-module reloading:
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build
Builds the static site into the `dist/` directory for deployment:
```bash
npm run build
```

### Preview Build Locally
Preview the production build locally before deploying:
```bash
npm run preview
```

---

## ⚙️ Senior Developer Setup & Hygiene

1. **Clean Git Tracking**: Build outputs (`dist/`, `.astro/`) and `node_modules/` are excluded via `.gitignore`.
2. **Binary Permissions**: Executable permissions are configured for `node_modules/.bin/astro`.
3. **Optimized Build**: Verified static build pipeline with Astro 5 and Tailwind engine.
