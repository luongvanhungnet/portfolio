import { describe, expect, it } from 'vitest';

import data from '../../stats/personal';

describe('personal stats data', () => {
  it('exports an empty array because the TeX resume has no stats', () => {
    expect(data).toEqual([]);
  });
});
