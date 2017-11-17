import { fetchPostsFulfilled } from '../actions';
import reducer from '../reducer';

describe('posts reducer', () => {
  it('should create an empty object as initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toMatchObject({});
  });

  const POST_1 = { id: 1, title: 'post 1' };
  const POST_2 = { id: 2, title: 'post 2' };
  const POST_3 = { id: 3, title: 'post 3' };
  it('should add elements from fetchPostsFulfilled', () => {
    const state = reducer(
      undefined,
      fetchPostsFulfilled([POST_1, POST_2, POST_3]),
    );
    expect(state).toMatchObject({
      1: POST_1,
      2: POST_2,
      3: POST_3,
    });
  });

  it('should replace elements after fetchPostsFulfilled', () => {
    let state = reducer(undefined, fetchPostsFulfilled([POST_1]));
    state = reducer(state, fetchPostsFulfilled([POST_2]));

    expect(state).toEqual({ 2: POST_2 });
  });
});
