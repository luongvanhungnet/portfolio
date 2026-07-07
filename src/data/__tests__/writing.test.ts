import { describe, expect, it } from 'vitest';

import writing from '../writing';

describe('writing data', () => {
  it('exports an empty array because the TeX resume has no writing links', () => {
    expect(writing).toEqual([]);
  });
});
