import { describe, expect, it } from 'vitest';

import data from '../../stats/site';

describe('site stats data', () => {
  it('exports an empty array because the TeX resume has no site stats', () => {
    expect(data).toEqual([]);
  });
});
