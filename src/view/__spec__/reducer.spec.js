import { setView } from '../actions';
import reducer from '../reducer';

describe('view reducer', () => {
  it('there should be a view reducer', () => {
    expect(reducer).toEqual(expect.any(Function));
  });

  it('should initialize in "welcome" root', () => {
    const initialState = reducer(undefined, {});

    expect(initialState).toMatchObject({
      root: 'welcome',
    });
  });

  it('should change the root view', () => {
    const state = reducer(undefined, setView('new root'));

    expect(state).toMatchObject({
      root: 'new root',
    });
  });

  it('should change the root id', () => {
    const state = reducer(undefined, setView('any', 123));

    expect(state).toMatchObject({
      id: 123,
    });
  });
});
