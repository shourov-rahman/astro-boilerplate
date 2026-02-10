/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Enable global test APIs (describe, it, expect, etc.)
    globals: true,
    
    // Use happy-dom for DOM simulation (lighter and faster than jsdom)
    environment: 'happy-dom',
    
    // Include source files for coverage
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    
    // Exclude common directories
    exclude: [
      'node_modules',
      'dist',
      '.astro',
      'e2e',
      '**/*.config.*',
    ],
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '.astro/',
        'e2e/',
        '**/*.config.*',
        '**/*.d.ts',
        '**/types.ts',
      ],
    },
    
    // Test timeout
    testTimeout: 10000,
  },
});
