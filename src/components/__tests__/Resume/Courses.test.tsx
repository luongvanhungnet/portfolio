import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Courses from '../../Resume/Courses';
import Course from '../../Resume/Courses/Course';

const mockCourses = [
  { title: 'Machine Learning' },
  { title: 'Deep Learning' },
  {
    title: 'Cấu trúc dữ liệu và giải thuật',
    number: 'IT3011',
    link: 'https://example.com/course',
    university: 'HUST',
  },
];

describe('Courses', () => {
  it('renders the courses section with title', () => {
    render(<Courses data={mockCourses} />);

    expect(
      screen.getByRole('heading', { name: /môn học liên quan/i }),
    ).toBeInTheDocument();
  });

  it('renders all courses', () => {
    render(<Courses data={mockCourses} />);

    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Deep Learning')).toBeInTheDocument();
    expect(
      screen.getByText('Cấu trúc dữ liệu và giải thuật'),
    ).toBeInTheDocument();
  });

  it('renders course numbers only when present', () => {
    render(<Courses data={mockCourses} />);

    expect(screen.getByText(/IT3011/)).toBeInTheDocument();
    expect(screen.queryByText(/undefined/)).not.toBeInTheDocument();
  });

  it('renders courses as list items', () => {
    render(<Courses data={mockCourses} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(mockCourses.length);
  });

  it('has anchor link for navigation', () => {
    render(<Courses data={mockCourses} />);

    const anchor = document.getElementById('courses');
    expect(anchor).toBeInTheDocument();
  });
});

describe('Course', () => {
  it('renders course title without requiring a link or number', () => {
    render(<Course data={{ title: 'Machine Learning' }} />);

    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders course as link when link is present', () => {
    const mockCourse = {
      title: 'Cấu trúc dữ liệu và giải thuật',
      number: 'IT3011',
      link: 'https://example.com/course',
      university: 'HUST',
    };

    render(<Course data={mockCourse} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockCourse.link);
  });

  it('renders as list item', () => {
    render(<Course data={{ title: 'Machine Learning' }} />);

    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
  });
});
