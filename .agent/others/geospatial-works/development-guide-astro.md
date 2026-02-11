## Core Development Philosophy

### KISS (Keep It Simple, Stupid)

Simplicity should be a key goal in design. Choose straightforward solutions over complex ones whenever possible. Simple solutions are easier to understand, maintain, and debug.

### YAGNI (You Aren't Gonna Need It)

Avoid building functionality on speculation. Implement features only when they are needed, not when you anticipate they might be useful in the future.

### Design Principles

-   **Islands Architecture**: Ship minimal JavaScript, hydrate only what needs interactivity.
-   **Performance by Default**: Static-first with selective hydration for optimal performance.
-   **Content-Driven**: Optimized for content-heavy websites with type-safe content management.
-   **Zero JavaScript by Default**: Only ship JavaScript when explicitly needed.
-   **Utility-First Styling**: Leverage Tailwind CSS to implement the **Swiss Grid / International Typographic Style** defined in `ui-design-guide.md`.

## 🤖 AI Assistant Guidelines

### Context Awareness

-   When implementing features, always check existing patterns first.
-   Prefer static generation regarding the Cloudflare adapter configuration.
-   Use `Alpine.js` for lightweight interactivity when full framework overhead isn't justified.

### Common Pitfalls to Avoid

-   Over-hydrating components that could be static.
-   Ignoring Astro's partial hydration benefits.
-   Creating duplicate functionality across different framework islands.
-   Overwriting existing integrations without checking alternatives.
-   Not using Tailwind's `@apply` or utility classes for reusability.

### Workflow Patterns

-   Use "think hard" for hydration strategy decisions.
-   Break complex interactive components into smaller, focused islands.
-   Validate hydration requirements before implementation.

## 🧱 Code Structure & Modularity

### File and Component Limits

-   **Never create a file longer than 500 lines of code.** If approaching this limit, refactor by splitting into modules or helper components.
-   **Astro components should be under 200 lines** for better maintainability.
-   **Functions should be short and focused sub 50 lines** and have a single responsibility.
-   **Organize code by feature and framework**, keeping related components together.

### Environment Configuration (astro:env)

-   **Type-Safe Environment Variables**: Validation and TypeScript support.
-   **Runtime Validation**: Automatic validation at build time.
-   **Client/Server Separation**: Clear distinction between public and private variables.

```typescript
// env.d.ts (Create this if missing)
import { defineEnv, envField } from "astro:env/config";

export default defineEnv({
  server: {
    DATABASE_URL: envField.string({ context: "server", access: "secret" }),
    API_SECRET: envField.string({ context: "server", access: "secret" }),
  },
  client: {
    PUBLIC_API_URL: envField.string({ context: "client", access: "public" }),
    PUBLIC_SITE_NAME: envField.string({ context: "client", access: "public" }),
  },
});
```

## 🏗️ Project Structure

```
src/
├── components/            # Astro components (.astro)
│   ├── ui/               # Static UI components (Tailwind-based)
│   ├── islands/          # Interactive components (Alpine.js or other frameworks)
│   └── layouts/          # Layout components
├── content/              # Content collections
│   ├── config.ts         # Content configuration
│   ├── blog/             # Blog posts (markdown/mdx)
│   └── docs/             # Documentation
├── pages/                # File-based routing (REQUIRED)
│   ├── api/              # API routes
│   ├── blog/             # Blog pages
│   └── [...slug].astro   # Dynamic routes
├── utils/                # Utility functions and configurations
│   ├── helpers.ts        # Helper functions
│   ├── constants.ts      # Application constants
│   └── schemas.ts        # Zod validation schemas
├── styles/               # Global styles
│   └── global.css        # CSS custom properties and globals (Tailwind directives)
├── assets/               # Processed assets (images, etc.)
└── env.d.ts              # Environment and type definitions
```

## 🎯 TypeScript Configuration (STRICT REQUIREMENTS)

### MANDATORY Type Requirements

-   **NEVER use `any` type** - use `unknown` if type is truly unknown.
-   **MUST use explicit type imports** with `import type { }` syntax.
-   **MUST define props interfaces** for all Astro components.
-   **MUST use Astro's built-in types** like `HTMLAttributes`, `ComponentProps`.
-   **MUST validate content with Zod schemas** in content collections.

### Component Props Typing (MANDATORY)

```typescript
// Astro component props
interface Props {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  class?: string;
}

const { title, description, image, class: className } = Astro.props;
```

## 🛡️ Data Validation with Zod (MANDATORY FOR CONTENT)

### Content Collections (REQUIRED Pattern)

```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  author: z.object({
    name: z.string(),
    email: z.string().email().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: blogSchema,
  }),
};
```

## 🔄 Content Management Patterns

### Content Collection Usage

```astro
---
// src/pages/blog/[...slug].astro
import { type CollectionEntry, getCollection } from 'astro:content';
import BlogLayout from '../../layouts/BlogLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

type Props = CollectionEntry<'blog'>;

const post = Astro.props;
const { Content } = await post.render();
---

<BlogLayout
  title={post.data.title}
  description={post.data.description}
  pubDate={post.data.pubDate}
  heroImage={post.data.heroImage}
>
  <Content />
</BlogLayout>
```

## 🚀 Performance Optimization

### Image Optimization (MANDATORY)

Use `astro:assets` for all images to ensure proper optimization and format conversion.

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Optimized images with Astro -->
<Image
  src={heroImage}
  alt="Hero image description"
  width={800}
  height={400}
  format="webp"
  quality={80}
  loading="eager"
/>
```

### Server Islands for Performance (Cloudflare/SSR)

If utilizing Server-Side Rendering (SSR) features with the Cloudflare adapter:

```astro
---
// src/components/DynamicContent.astro
export const prerender = false; // Mark as server island

// This runs on the server for each request
const userPreferences = await getUserPreferences(Astro.locals.userId);
---
```

## 🎨 Design & Styling

- Use tailwind css for styling
- **Strictly follow `ui-design-guide.md`**.

### Utility-First Example

```astro
<!-- Swiss Style Card Component -->
<div class="flex flex-col border-2 border-gray-200 bg-gray-50 p-6 rounded-none hover:border-red-600 transition-colors duration-300">
  <h2 class="text-4xl font-bold uppercase tracking-tighter text-gray-950">Title</h2>
  <span class="mt-2 text-sm uppercase tracking-wider text-gray-600">Category</span>
</div>
```

## 🎨 Icon Strategy
-   **MUST use `astro-icon`**: Use the `astro-icon` package for all icons to ensure SVG optimization and consistency.
-   **Icon Collection**: Prefer using standard collections (e.g., `lucide`, `heroicons`, or `material-design-icons`) via `astro-icon`. Avoid using raw SVGs or emojis for UI icons.


## ⚠️ CRITICAL GUIDELINES (MUST FOLLOW ALL)

1.  **MUST use pnpm** - Never use npm or yarn for package management.
2.  **ENFORCE TypeScript strict mode** - Maintain zero TypeScript errors.
3.  **VALIDATE all content with Zod** - Content collections MUST have schemas.
4.  **MUST understand hydration strategy** - Use appropriate client directives (`client:visible`, `client:idle`).
5.  **Use Alpine.js for interactivity** - Prefer lightweight Alpine.js over heavy frameworks for simple dynamic behavior.
6.  **MAXIMUM 500 lines per file** - Split large components in `src/components`.
7.  **Structure code in `src/utils`** - Place helpers and logic in `src/utils` (not `src/lib` unless configured otherwise).
8.  **MUST optimize images** - Use Astro's `Image` component.
9.  **MUST validate environment variables** - Use `astro:env` if configured, or maintain strict type checks.
10. **NEVER use `any` type** - leverage Astro's built-in type safety.
11. **ALWAYS Lint & Format** - Run `pnpm lint` and `pnpm format` before committing.
12. **Cloudflare Compatibility** - Ensure all server-side code is compatible with Cloudflare Workers runtime.

### FORBIDDEN Practices

-   **NEVER use npm or yarn** - MUST use pnpm.
-   **NEVER use client:load** without justification.
-   **NEVER skip content validation**.
-   **NEVER use heavy UI libraries** (like Bootstrap/MUI) when Tailwind is available.
-   **NEVER mix concerns** - separate static content from interactive islands.
-   **NEVER use `any` type**.
-   **NEVER ignore build warnings** - address all issues.
-   **NEVER commit unformatted code**.
