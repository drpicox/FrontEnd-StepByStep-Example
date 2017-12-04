import reducer from '../reducer';
import { setSearch } from '../actions';

describe('search reducer', () => {
  it('should initialize state with an empty string', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toBe('');
  });

  it('should replace the search string when setSearch', () => {
    const state = reducer(undefined, setSearch('new search'));
    expect(state).toBe('new search');
  });
});
