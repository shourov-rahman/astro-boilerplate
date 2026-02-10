import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Welcome from './Welcome.astro';

describe('Welcome Component', () => {
  it('should render the welcome message', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Welcome);

    expect(result).toContain('Hello World');
    expect(result).toContain('🚀');
  });

  it('should have proper heading structure', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Welcome);

    expect(result).toContain('<h1');
    expect(result).toContain('</h1>');
  });

  it('should include Tailwind classes', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Welcome);

    expect(result).toContain('text-4xl');
    expect(result).toContain('font-bold');
  });
});
