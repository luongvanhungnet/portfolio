import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Education from '../../Resume/Education';
import Degree from '../../Resume/Education/Degree';

const mockDegrees = [
  {
    school: 'Đại học Bách khoa Hà Nội',
    degree: 'Chuyên ngành Công nghệ Thông tin Việt-Nhật',
    link: 'https://hust.edu.vn',
    period: '2023 - Hiện tại',
    details: ['Trường Công nghệ Thông tin và Truyền thông'],
  },
];

describe('Education', () => {
  it('renders the education section with title', () => {
    render(<Education data={mockDegrees} />);

    expect(
      screen.getByRole('heading', { name: /học vấn/i }),
    ).toBeInTheDocument();
  });

  it('renders all degrees', () => {
    render(<Education data={mockDegrees} />);

    expect(
      screen.getByText('Chuyên ngành Công nghệ Thông tin Việt-Nhật'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Trường Công nghệ Thông tin và Truyền thông'),
    ).toBeInTheDocument();
  });

  it('renders school links', () => {
    render(<Education data={mockDegrees} />);

    const link = screen.getByRole('link', {
      name: /đại học bách khoa hà nội/i,
    });
    expect(link).toHaveAttribute('href', 'https://hust.edu.vn');
  });

  it('has anchor link for navigation', () => {
    render(<Education data={mockDegrees} />);

    const anchor = document.getElementById('education');
    expect(anchor).toBeInTheDocument();
  });
});

describe('Degree', () => {
  const mockDegree = mockDegrees[0];

  it('renders degree title', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'Chuyên ngành Công nghệ Thông tin Việt-Nhật',
    );
  });

  it('renders school name with link', () => {
    render(<Degree data={mockDegree} />);

    const link = screen.getByRole('link', {
      name: /đại học bách khoa hà nội/i,
    });
    expect(link).toHaveAttribute('href', 'https://hust.edu.vn');
  });

  it('displays period', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByText(/2023 - Hiện tại/)).toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Degree data={mockDegree} />);

    const article = document.querySelector('article.degree-container');
    expect(article).toBeInTheDocument();
  });
});
