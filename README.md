# 🚀 Astro Premium Boilerplate

A modern, high-performance, and SEO-optimized **Astro 5** boilerplate designed for speed, developer experience, and scalability. Built with **Tailwind CSS v4**, **AlpineJS**, and pre-configured with essential integrations.

## ✨ Features

- **Framework**: [Astro 5](https://astro.build/) - The web framework for content-driven websites.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Using the new Vite-based engine for ultra-fast builds.
- **Interactivity**: [Alpine.js](https://alpinejs.dev/) - Lightweight JavaScript framework for small-to-medium interactivity.
- **Content**: [MDX](https://mdxjs.com/) - Use JSX components in your Markdown.
- **SEO Ready**:
  - `astro-seo` for managing meta tags.
  - Automatic `sitemap` generation.
  - `astro-robots-txt` for search engine guidance.
- **Deployment**: Configured for [Cloudflare Pages](https://pages.cloudflare.com/) (SSR or Static).
- **Icons**: `astro-icon` for optimized SVG icon management.
- **Utilities**:
  - `clsx` & `tailwind-merge` with a custom `cn` utility.
  - `date-fns` for robust date manipulation.
- **Code Quality**:
  - **ESLint**: Pre-configured for Astro and TypeScript.
  - **Prettier**: With `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.

## 🛠️ Project Structure

```text
/
├── .vscode/            # VS Code workspace settings
├── src/
│   ├── assets/         # Optimized images and media
│   ├── components/     # Reusable Astro/UI components
│   ├── content/        # Content collections (Markdown/MDX)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routing (file-based)
│   ├── styles/         # Global CSS and Tailwind layers
│   └── utils/          # Helper functions (including cn utility)
├── public/             # Static assets (robots.txt, etc.)
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### 1. Installation

```bash
pnpm install
```

### 2. Development

Start the development server with HMR:

```bash
pnpm dev
```

### 3. Build

Create a production-ready build:

```bash
pnpm build
```

### 4. Code Quality

```bash
# Lint code
pnpm lint

# Format code
pnpm format
```

## 🔧 Configuration

### Tailwind CSS v4

The project uses the new CSS-first configuration. You can customize your theme in `src/styles/global.css`:

```css
@theme {
  --font-sans: 'Inter', sans-serif;
  /* Add your custom theme variables here */
}
```

### SEO & Meta Tags

The `Layout.astro` component is pre-configured with SEO best practices. Simply pass `title` and `description` props to the layout.

## 📄 License

MIT
