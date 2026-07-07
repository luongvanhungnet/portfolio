import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('uses trailing slashes for exported page routes with CV content', () => {
    const entries = sitemap();

    expect(entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: `${SITE_URL}/about/` }),
        expect.objectContaining({ url: `${SITE_URL}/resume/` }),
        expect.objectContaining({ url: `${SITE_URL}/projects/` }),
        expect.objectContaining({ url: `${SITE_URL}/contact/` }),
      ]),
    );
  });

  it('does not include hidden empty writing or stats routes', () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).not.toContain(`${SITE_URL}/writing/`);
    expect(urls).not.toContain(`${SITE_URL}/stats/`);
  });

  it('has no post routes when content/writing is empty', () => {
    const entries = sitemap();
    const postEntries = entries.filter((entry) =>
      entry.url.startsWith(`${SITE_URL}/writing/`),
    );

    expect(postEntries).toEqual([]);
  });
});
