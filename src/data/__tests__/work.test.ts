import { describe, expect, it } from 'vitest';

import work from '../resume/work';

describe('work data', () => {
  it('exports an empty array because the TeX resume has no work history', () => {
    expect(work).toEqual([]);
  });
});
