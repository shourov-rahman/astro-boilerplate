---
title: 'Testing Guide'
description: 'Guide for unit and end-to-end testing with Vitest and Playwright.'
---

# Testing Guide

This project uses **Vitest** for unit tests and **Playwright** for end-to-end (e2e) tests, following Astro best practices.

## 📦 Installed Packages

### Vitest (Unit Testing)

- `vitest` - Fast unit test framework powered by Vite
- `@vitest/ui` - Interactive UI for running and debugging tests
- `happy-dom` - Lightweight DOM implementation for testing

### Playwright (E2E Testing)

- `@playwright/test` - End-to-end testing framework
- `@types/node` - TypeScript types for Node.js

## 🧪 Running Tests

### Unit Tests (Vitest)

```bash
# Run tests in watch mode (recommended for development)
pnpm test

# Run tests once
pnpm run test:run

# Run tests with UI
pnpm run test:ui

# Run tests with coverage report
pnpm run test:coverage
```

### E2E Tests (Playwright)

```bash
# Run all e2e tests
pnpm run test:e2e

# Run e2e tests with UI mode
pnpm run test:e2e:ui

# Run e2e tests in debug mode
pnpm run test:e2e:debug

# Run e2e tests on specific browser
pnpm run test:e2e:chromium

# Run all tests (unit + build + e2e)
pnpm run test:all
```

## 📁 Test File Structure

```
astro-boilerplate/
├── src/
│   ├── components/
│   │   ├── Welcome.astro
│   │   └── Welcome.test.ts          # Component tests
│   └── utils/
│       ├── cn.ts
│       └── cn.test.ts                # Utility function tests
├── e2e/
│   └── example.spec.ts               # E2E tests
├── vitest.config.ts                  # Vitest configuration
└── playwright.config.ts              # Playwright configuration
```

## ✍️ Writing Tests

### Unit Tests with Vitest

Create test files with `.test.ts` or `.spec.ts` extension next to your source files:

```typescript
import { describe, it, expect } from 'vitest';
import { myFunction } from './myFunction';

describe('myFunction', () => {
  it('should do something', () => {
    const result = myFunction('input');
    expect(result).toBe('expected output');
  });
});
```

### Testing Astro Components

Use the Astro Container API to test components:

```typescript
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import MyComponent from './MyComponent.astro';

describe('MyComponent', () => {
  it('should render correctly', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(MyComponent, {
      props: { title: 'Test' },
      slots: { default: 'Content' },
    });

    expect(result).toContain('Test');
    expect(result).toContain('Content');
  });
});
```

### E2E Tests with Playwright

Create test files in the `e2e/` directory with `.spec.ts` extension:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should perform action', async ({ page }) => {
    await page.goto('/');

    const element = page.getByRole('button', { name: 'Click me' });
    await expect(element).toBeVisible();
    await element.click();

    await expect(page).toHaveURL('/success');
  });
});
```

## ⚙️ Configuration

### Vitest Configuration (`vitest.config.ts`)

- Uses Astro's `getViteConfig` helper for seamless integration
- Configured with `happy-dom` for DOM simulation
- Global test APIs enabled (describe, it, expect)
- Coverage reporting with v8 provider
- Test files: `src/**/*.{test,spec}.{js,ts,jsx,tsx}`

### Playwright Configuration (`playwright.config.ts`)

- Automatically starts preview server before tests
- Tests run on Chromium, Firefox, and WebKit
- Base URL: `http://localhost:4321`
- Retries on CI: 2 attempts
- HTML reporter for test results
- Traces captured on first retry

### TypeScript Configuration

The `tsconfig.json` includes Vitest global types for autocompletion:

```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
```

## 🎯 Best Practices

### Unit Tests

1. **Test pure functions first** - Start with utility functions and helpers
2. **Use descriptive test names** - Clearly state what is being tested
3. **Follow AAA pattern** - Arrange, Act, Assert
4. **Keep tests isolated** - Each test should be independent
5. **Mock external dependencies** - Use Vitest's mocking capabilities

### E2E Tests

1. **Test user journeys** - Focus on critical user paths
2. **Use semantic selectors** - Prefer `getByRole`, `getByLabel` over CSS selectors
3. **Wait for elements** - Use Playwright's auto-waiting features
4. **Test across browsers** - Run tests on multiple browsers
5. **Keep tests maintainable** - Use page objects for complex pages

### General

- Run tests before committing code
- Maintain high test coverage for critical paths
- Update tests when changing functionality
- Use CI/CD to run tests automatically
- Review test failures carefully

## 🔍 Coverage Reports

After running `pnpm run test:coverage`, coverage reports are generated in:

- `coverage/` directory (HTML report)
- Terminal output (text summary)

Open `coverage/index.html` in your browser to view detailed coverage information.

## 🐛 Debugging

### Vitest

- Use `test.only()` to run a single test
- Use `test.skip()` to skip a test
- Add `console.log()` statements for debugging
- Use the Vitest UI for interactive debugging

### Playwright

- Use `--debug` flag to run in debug mode
- Use `page.pause()` to pause execution
- Use `--ui` flag for interactive mode
- Check `playwright-report/` for HTML reports
- Use `npx playwright codegen` to generate tests

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Astro Testing Guide](https://docs.astro.build/en/guides/testing/)
- [Astro Container API](https://docs.astro.build/en/reference/container-reference/)

## 🚀 CI/CD Integration

The test setup is CI-ready with:

- Automatic retries on CI environments
- Optimized worker configuration
- `forbidOnly` to prevent accidental `.only()` in CI
- Proper timeout configurations

Example GitHub Actions workflow:

```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Run unit tests
        run: pnpm run test:run

      - name: Build project
        run: pnpm run build

      - name: Install Playwright browsers
        run: pnpm exec playwright install --with-deps

      - name: Run e2e tests
        run: pnpm run test:e2e

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
```
