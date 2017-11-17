import {
  fetchPosts,
  FETCH_POSTS,
  fetchPostsFulfilled,
  FETCH_POSTS_FULFILLED,
} from '../actions';

describe('fetchPosts', () => {
  it('should create an action of type FETCH_POSTS', () => {
    const action = fetchPosts();
    expect(action).toMatchObject({
      type: FETCH_POSTS,
    });
  });
});

describe('fetchPostsFulfilled', () => {
  it('should create an action of type FETCH_POSTS_FULFILLED', () => {
    const action = fetchPostsFulfilled();
    expect(action).toMatchObject({
      type: FETCH_POSTS_FULFILLED,
    });
  });

  it('should add a payload', () => {
    const action = fetchPostsFulfilled('some payload');
    expect(action).toMatchObject({
      payload: 'some payload',
    });
  });
});
