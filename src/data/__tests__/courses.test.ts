import { describe, expect, it } from 'vitest';

import courses from '../resume/courses';

describe('courses data', () => {
  it('exports relevant courses from the TeX resume', () => {
    expect(courses.map((course) => course.title)).toEqual([
      'Cấu trúc dữ liệu và giải thuật',
      'Lập trình hướng đối tượng',
      'Cơ sở dữ liệu',
      'Mạng máy tính',
      'Nguyên lý hệ điều hành',
      'Machine Learning',
      'Deep Learning',
      'Xử lý ngôn ngữ tự nhiên',
      'Mô hình ngôn ngữ lớn (đang học)',
    ]);
  });

  it('course titles are non-empty and unique', () => {
    const titles = courses.map((course) => course.title);
    const uniqueTitles = new Set(titles);

    expect(uniqueTitles.size).toBe(titles.length);
    for (const title of titles) {
      expect(title.trim().length).toBeGreaterThan(0);
    }
  });

  it('links are valid URLs when present', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const course of courses) {
      if (course.link) {
        expect(course.link).toMatch(urlRegex);
      }
    }
  });
});
