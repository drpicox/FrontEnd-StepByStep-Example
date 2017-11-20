import {
  fetchComments,
  FETCH_COMMENTS,
  fetchCommentsFulfilled,
  FETCH_COMMENTS_FULFILLED,
} from '../actions';

describe('fetchComments', () => {
  it('should create an action of type FETCH_COMMENTS', () => {
    const action = fetchComments();
    expect(action).toMatchObject({
      type: FETCH_COMMENTS,
    });
  });

  it('should have postId paramenter', () => {
    const action = fetchComments(3);
    expect(action).toMatchObject({
      postId: 3,
    });
  });
});

describe('fetchCommentsFulfilled', () => {
  it('should create an action of type FETCH_COMMENTS_FULFILLED', () => {
    const action = fetchCommentsFulfilled();
    expect(action).toMatchObject({
      type: FETCH_COMMENTS_FULFILLED,
    });
  });

  it('should have payload paramenter', () => {
    const action = fetchCommentsFulfilled('some payload');
    expect(action).toMatchObject({
      payload: 'some payload',
    });
  });
});
