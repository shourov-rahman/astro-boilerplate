# Legacy CSS Support for Astro & Tailwind CSS v4

This document outlines the configuration, required packages, and architectural details for supporting legacy browsers (e.g., IE 11, older Safari/Chrome/Firefox) in this Astro project.

## 1. Required Packages

To achieve full legacy support, the following packages are installed and configured. 

### Core CSS Framework
- `tailwindcss@^4.1.18`: The main Tailwind framework.
- `@tailwindcss/vite@^4.1.18`: The Vite plugin for Tailwind v4 integration.

### PostCSS Processing & Polyfilling
- `postcss@^8.5.6`: The tool for transforming CSS with plugins.
- `autoprefixer@^10.4.23`: Automatically adds vendor prefixes to CSS rules using values from Can I Use.
- `postcss-preset-env@^11.1.2`: Converts modern CSS into something most browsers can understand, determining the polyfills you need based on your target browsers.
- `postcss-flexbugs-fixes@^5.0.2`: Tries to fix all of the [flexbug's](https://github.com/philipwalton/flexbugs) issues.

### Installation Command
If you need to re-install these for a fresh project:
```bash
npm install -D postcss autoprefixer postcss-preset-env postcss-flexbugs-fixes
```

## 2. Browserslist Configuration

The project uses a `browserslist` key in `package.json`. This is the single source of truth for all tools (Autoprefixer, Babel, PostCSS) to know which browsers to target.

**Current Configuration:**
```json
"browserslist": [
  "> 0.5%",
  "last 2 versions",
  "Firefox ESR",
  "not dead",
  "ie 11"
]
```
- **`> 0.5%`**: Target browsers with more than 0.5% global usage.
- **`last 2 versions`**: Target the last 2 versions of every major browser.
- **`not dead`**: Exclude browsers that haven't had official support or updates in 24 months.
- **`ie 11`**: Explicitly includes Internet Explorer 11.

## 3. PostCSS Pipeline (`postcss.config.cjs`)

The pipeline is ordered to ensure fixes happen before polyfilling.

```javascript
module.exports = {
  plugins: {
    // 1. Fix known flexbox bugs in IE 10/11
    'postcss-flexbugs-fixes': {},
    
    // 2. Polyfill modern CSS features based on Browserslist
    'postcss-preset-env': {
      stage: 2, // Stable features + some in-progress (good balance)
      features: {
        'nesting-rules': true,      // Supports & nested syntax
        'custom-properties': true, // Attempts to polyfill CSS variables
      },
      autoprefixer: {
        flexbox: 'no-2009', // Specific fix for older flexbox specs
      },
    },
  },
};
```

## 4. Vite/Astro Integration (`astro.config.mjs`)

Because Tailwind v4 is a Vite plugin, we must ensure PostCSS is explicitly called within the Vite config so it processes the Tailwind output.

```javascript
export default defineConfig({
  // ...
  vite: {
    plugins: [tailwindcss()],
    css: {
      postcss: './postcss.config.cjs', // Forces Vite to use our config
    },
  },
});
```

## 5. Tailoring Tailwind v4 for Legacy

### CSS Variables (Custom Properties)
Tailwind v4 relies heavily on CSS variables. While `postcss-preset-env` can polyfill them to some extent (by adding static fallbacks), it is not a perfect dynamic polyfill for IE 11. 
*   **Strategy**: Avoid using extremely complex dynamic variable calculations if IE 11 is a primary target, or verify that the PostCSS build generates the static fallbacks correctly.

### Modern Selectors
The `:where()` selector is used in some Tailwind v4 default variants (like the dark mode variant in `global.css`). 
*   **IE 11 Note**: IE 11 does **not** support `:where()`. 
*   **Fix**: If you need IE 11 dark mode support, you should change the variant in `global.css` to use a standard selector line:
    ```css
    /* Instead of :where() */
    @custom-variant dark (.dark &);
    ```

## 6. Verification Steps
1.  Run `npm run build`.
2.  Inspect the files in `dist/_astro/`.
3.  Look for vendor prefixes like `-ms-flex` or `-webkit-transform`.
4.  Check that nested rules have been flattened.
