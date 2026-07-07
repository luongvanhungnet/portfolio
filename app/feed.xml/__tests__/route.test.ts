import { describe, expect, it } from 'vitest';

import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';
import { GET } from '../route';

describe('feed.xml route', () => {
  it('uses canonical feed links and Vietnamese channel metadata', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/writing/`);
    expect(xml).toContain(`${SITE_URL}/feed.xml`);
    expect(xml).toContain(`${AUTHOR_NAME} - Bài viết`);
    expect(xml).toContain('<language>vi-vn</language>');
    expect(xml).not.toContain(`${SITE_URL}/feed.xml/`);
  });

  it('does not include template post items when writing content is empty', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).not.toContain('<item>');
    expect(xml).not.toContain('claude-code-outage');
    expect(xml).not.toContain('shipping-with-claude-code');
  });
});
