import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('px-4', 'py-2');
    expect(result).toBe('px-4 py-2');
  });

  it('should handle conditional classes', () => {
    const result = cn(
      'base-class',
      true && 'conditional-class',
      false && 'hidden-class'
    );
    expect(result).toBe('base-class conditional-class');
  });

  it('should merge conflicting Tailwind classes', () => {
    const result = cn('px-4', 'px-8');
    expect(result).toBe('px-8');
  });

  it('should handle arrays of classes', () => {
    const result = cn(['class-1', 'class-2'], 'class-3');
    expect(result).toBe('class-1 class-2 class-3');
  });

  it('should handle objects with boolean values', () => {
    const result = cn({
      'always-present': true,
      'conditionally-present': true,
      'never-present': false,
    });
    expect(result).toBe('always-present conditionally-present');
  });

  it('should filter out falsy values', () => {
    const result = cn('class-1', null, undefined, false, '', 'class-2');
    expect(result).toBe('class-1 class-2');
  });
});
