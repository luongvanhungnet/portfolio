import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Site from '../../Stats/Site';

describe('Site', () => {
  it('renders an empty site stats table without fetching template data', () => {
    const fetchSpy = vi.spyOn(global, 'fetch');

    render(<Site />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(screen.queryAllByRole('row')).toHaveLength(1);

    fetchSpy.mockRestore();
  });
});
