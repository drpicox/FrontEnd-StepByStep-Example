import reducer from '../reducer';

describe('search reducer', () => {
  it('should initialize state with an empty string', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toBe('');
  });
});
