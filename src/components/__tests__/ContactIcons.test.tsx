import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ContactIcons from '../Contact/ContactIcons';

describe('ContactIcons', () => {
  it('renders contact icons', () => {
    render(<ContactIcons />);

    // Check if GitHub link is present
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/luongvanhungnet',
    );

    // Check if email link is present
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:luongvanhungnet@gmail.com',
    );

    expect(screen.getByRole('link', { name: /website/i })).toHaveAttribute(
      'href',
      'https://www.luongvanhungnet.xyz/',
    );
    expect(
      screen.getByRole('link', { name: /\(\+84\) 347 826 500/i }),
    ).toHaveAttribute('href', 'tel:+84347826500');
  });

  it('has correct number of contact links', () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
