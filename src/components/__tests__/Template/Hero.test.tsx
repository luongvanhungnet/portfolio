import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Lương Văn Hưng');
  });

  it('renders the HUST tagline link', () => {
    render(<Hero />);

    const hustLink = screen.getByRole('link', {
      name: /đại học bách khoa hà nội/i,
    });
    expect(hustLink).toHaveAttribute('href', 'https://hust.edu.vn');
    expect(hustLink).toHaveClass('hero-highlight');
  });

  it('displays hero chips from the TeX resume', () => {
    render(<Hero />);

    expect(screen.getByText('AI / Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Full-stack')).toBeInTheDocument();
    expect(screen.getByText('HUST 2023 - Hiện tại')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /giới thiệu/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /xem hồ sơ/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('button-secondary');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
