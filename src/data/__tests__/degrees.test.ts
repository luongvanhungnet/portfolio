import { describe, expect, it } from 'vitest';

import degrees from '../resume/degrees';

describe('degrees data', () => {
  it('exports the education entry from the TeX resume', () => {
    expect(degrees).toEqual([
      {
        school: 'Đại học Bách khoa Hà Nội',
        degree: 'Chuyên ngành Công nghệ Thông tin Việt-Nhật',
        link: 'https://hust.edu.vn',
        period: '2023 - Hiện tại',
        details: ['Trường Công nghệ Thông tin và Truyền thông'],
      },
    ]);
  });

  it('links are valid URLs when present', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const degree of degrees) {
      if (degree.link) {
        expect(degree.link).toMatch(urlRegex);
      }
    }
  });
});
