import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  it('renders the email address from the TeX resume', () => {
    render(<EmailLink />);

    expect(screen.getByText('luongvanhungnet')).toBeInTheDocument();
    expect(screen.getByText('@gmail.com')).toBeInTheDocument();
  });

  it('renders a mailto link', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'mailto:luongvanhungnet@gmail.com');
  });
});
