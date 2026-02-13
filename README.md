# 🚀 Astro Premium Boilerplate

[![Astro](https://img.shields.io/badge/Astro-5.0+-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3.0-8BC0D0?style=for-the-badge&logo=alpine.js&logoColor=white)](https://alpinejs.dev/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

A modern, high-performance, and SEO-optimized **Astro 5** boilerplate designed for speed, developer experience, and scalability. Built with **Tailwind CSS v4**, **Alpine.js**, and pre-configured with essential integrations for production-ready applications.

---

## ✨ Features

- **🚀 Astro 5 Core**: Using the latest Islands architecture for optimal performance.
- **🎨 Tailwind CSS v4**: Ultra-fast styling with the new CSS-first configuration engine.
- **⚡ Alpine.js**: Lightweight interactivity without the overhead of heavy frameworks.
- **☁️ Cloudflare Native**: Pre-configured for Cloudflare Pages with SSR, KV-based sessions, and image optimization.
- **🔍 SEO Perfection**:
  - `astro-seo` for dynamic meta tags and open graph support.
  - Automatic `sitemap` and `robots.txt` generation.
  - Semantic HTML5 structure.
- **🛠️ Developer Experience**:
  - **TypeScript Strict Mode**: Zero-error tolerance for robust code.
  - **Unit Testing**: Vitest with `happy-dom` and 80%+ coverage target.
  - **E2E Testing**: Playwright for cross-browser reliability.
  - **ESLint & Prettier**: Enforced code quality and formatting.
- **📦 Content Management**:
  - Type-safe content collections with Zod schemas.
  - **MDX Support**: JSX components directly in your Markdown content.
- **💎 Premium UI**:
  - Dark mode support out-of-the-box.
  - Lucide icons via `astro-icon`.
  - Optimized fonts with `@fontsource/inter`.

---

## 🛠️ Project Structure

This project follows a modular, feature-based directory structure for maximum maintainability:

```text
├── e2e/                # Playwright end-to-end tests
├── public/             # Static assets (fonts, icons, robots.txt)
├── src/
│   ├── assets/         # Build-time optimized images and branding
│   ├── components/
│   │   ├── common/     # Atomic primitives (Buttons, Inputs)
│   │   ├── islands/    # Hydrated components (Alpine.js)
│   │   ├── layout/     # Structural components (Header, Footer)
│   │   ├── seo/        # Meta and JSON-LD components
│   │   └── ui/         # Composite UI elements (Modals, Tabs)
│   ├── config/         # App constants and site configuration
│   ├── data/           # Raw content files (MDX/Markdown)
│   ├── features/       # Domain-specific logic and components
│   ├── layouts/        # Reusable page templates
│   ├── pages/          # File-based routing (including API routes)
│   ├── styles/         # Global CSS and Tailwind theme
│   ├── utils/          # Pure helper functions
│   ├── content.config.ts # Content collection definitions
│   └── env.d.ts        # Type definitions for env variables
├── astro.config.mjs    # Astro & Integration settings
├── wrangler.toml       # Cloudflare deployment config
└── vitest.config.ts    # Unit testing configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [pnpm](https://pnpm.io/) installed.

### 2. Installation

```bash
pnpm install
```

### 3. Development

Start the development server with Hot Module Replacement (HMR):

```bash
pnpm dev
```

### 4. Build & Preview

Prepare for production and preview locally using Wrangler:

```bash
pnpm build
pnpm preview
```

---

## 🧪 Testing Suite

We maintain high standards for code quality through comprehensive testing.

### Unit & Component Tests (Vitest)
```bash
# Run all tests
pnpm test

# Run tests with UI
pnpm test:ui

# Generate coverage report
pnpm test:coverage
```

### End-to-End Tests (Playwright)
```bash
# Run E2E tests
pnpm test:e2e

# Run E2E tests in debug mode
pnpm test:e2e:debug
```

---

## 🔧 Workflow & Tools

### Code Quality
```bash
# Lint code for errors
pnpm lint

# Format code with Prettier
pnpm format
```

### Tailwind CSS v4 Customization
Configuration is now CSS-first. Customize your design tokens in `src/styles/global.css`:
```css
@theme {
  --font-sans: 'Inter', sans-serif;
  --color-primary: #your-color;
}
```

### Alpine.js Interactivity
Use the `client:load` or `client:visible` directives for islands that require Alpine.js:
```html
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
</div>
```

---

## 🌐 Deployment

### Cloudflare Pages
This boilerplate is optimized for Cloudflare. The `astro.config.mjs` is set to `output: 'server'` with the Cloudflare adapter.

1. Connect your repository to Cloudflare Pages.
2. Select **Astro** as the framework preset.
3. Build command: `pnpm build`
4. Output directory: `dist`
5. Environments: Ensure `node` version is set to 18+ or 20+.

---

## 📄 License

This project is licensed under the MIT License.
