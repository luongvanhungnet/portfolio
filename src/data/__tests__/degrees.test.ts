import { describe, expect, it } from 'vitest';

import degrees from '../resume/degrees';

describe('degrees data', () => {
  it('exports the education entry from the TeX resume', () => {
    expect(degrees).toEqual([
      {
        school: 'Hanoi University of Science and Technology',
        degree: 'Major in Vietnam-Japan Information Technology',
        link: 'https://hust.edu.vn',
        period: '2023 - Present',
        details: ['School of Information and Communication Technology'],
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
