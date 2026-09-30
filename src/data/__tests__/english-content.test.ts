import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '@/data/about';
import projects from '@/data/projects';
import { SITE_LANGUAGE } from '@/lib/schema';
import { SITE_DESCRIPTION } from '@/lib/utils';

describe('English portfolio content', () => {
  it('uses English for the site language and CV copy', () => {
    expect(SITE_LANGUAGE).toBe('en-US');
    expect(SITE_DESCRIPTION).toContain(
      'Vietnam-Japan Information Technology student',
    );
    expect(aboutMarkdown).toContain('# Education');
    expect(projects[0].desc).toContain('platform');
  });
});
