import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ResumeNav from '../../Resume/ResumeNav';

describe('ResumeNav', () => {
  it('renders navigation element', () => {
    render(<ResumeNav />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('renders links to all resume sections', () => {
    render(<ResumeNav />);

    expect(screen.getByRole('link', { name: /học vấn/i })).toHaveAttribute(
      'href',
      '#education',
    );
    expect(screen.getByRole('link', { name: /định hướng/i })).toHaveAttribute(
      'href',
      '#focus',
    );
    expect(screen.getByRole('link', { name: /dự án/i })).toHaveAttribute(
      'href',
      '#projects',
    );
    expect(screen.getByRole('link', { name: /kỹ năng/i })).toHaveAttribute(
      'href',
      '#skills',
    );
    expect(screen.getByRole('link', { name: /môn học/i })).toHaveAttribute(
      'href',
      '#courses',
    );
    expect(screen.getByRole('link', { name: /thành tích/i })).toHaveAttribute(
      'href',
      '#achievements',
    );
    expect(screen.getByRole('link', { name: /liên hệ/i })).toHaveAttribute(
      'href',
      '#contact',
    );
  });

  it('renders 7 navigation links', () => {
    render(<ResumeNav />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(7);
  });

  it('has correct CSS class', () => {
    render(<ResumeNav />);

    const nav = document.querySelector('.resume-nav');
    expect(nav).toBeInTheDocument();
  });

  it('education link is active by default', () => {
    render(<ResumeNav />);

    const educationLink = screen.getByRole('link', { name: /học vấn/i });
    expect(educationLink).toHaveClass('active');
  });
});
