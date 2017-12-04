import { getSearch } from '../selectors';

const STATE = {
  search: 'star',
};

describe('getSearch', () => {
  it('should return the current search text', () => {
    const search = getSearch(STATE);
    expect(search).toBe('star');
  });
});
