import { setSearch, SET_SEARCH } from '../actions';

describe('setSearch', () => {
  it('should create an action of type SET_SEARCH', () => {
    const action = setSearch();
    expect(action).toMatchObject({
      type: SET_SEARCH,
    });
  });

  it('should set the field search with the new text', () => {
    const action = setSearch('new search');
    expect(action).toMatchObject({
      search: 'new search',
    });
  });
});
