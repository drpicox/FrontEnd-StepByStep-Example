import reducer from '../reducer';

import { setCurrentRepo } from '../actions';

describe('reduce(repos.current)', () => {
  it('should have null as initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toBe(null);
  });

  it('should not modify the state if unknown action', () => {
    const prevState = { company: 'acme' };
    const nextState = reducer(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

  it('should update the repo', () => {
    const state = reducer(undefined, setCurrentRepo('newRepo'));
    expect(state).toBe('newRepo');
  });
});
