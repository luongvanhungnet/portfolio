import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the TeX resume sections', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('# Education');
    expect(aboutMarkdown).toContain('# Selected projects');
    expect(aboutMarkdown).toContain('# Contact');
  });

  it('contains the HUST education and professional focus', () => {
    expect(aboutMarkdown).toContain(
      'Hanoi University of Science and Technology',
    );
    expect(aboutMarkdown).toContain('Vietnam-Japan Information Technology');
    expect(aboutMarkdown).toContain('AI, Machine Learning, Deep Learning');
  });

  it('contains contact links from the TeX resume', () => {
    expect(aboutMarkdown).toContain('luongvanhungnet@gmail.com');
    expect(aboutMarkdown).toContain('https://github.com/luongvanhungnet');
    expect(aboutMarkdown).toContain('tel:+84347826500');
  });

  it('contains valid markdown links', () => {
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(3);
  });
});
