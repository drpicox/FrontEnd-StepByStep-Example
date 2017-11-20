import { fetchComments, FETCH_COMMENTS } from '../actions';

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
