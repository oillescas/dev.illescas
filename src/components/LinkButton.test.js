import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LinkButton from './LinkButton.astro';

describe('LinkButton', () => {
  it('renders with correct props', () => {
    const { getByText, getByRole } = render(
      <LinkButton href="https://example.com" title="Example Link" />
    );

    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    expect(getByText('Example Link')).toBeInTheDocument();
  });
});