import reducer from '../reducer';

describe('reduce(repos.list)', () => {
  it('should initialize an array of strings', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(expect.arrayContaining([expect.any(String)]));
  });
});
