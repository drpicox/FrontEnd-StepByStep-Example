import reducer from '../reducer';
import { fetchCommentsFulfilled } from '../actions';

describe('comments reducer', () => {
  it('should create an empty object as initial state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState).toMatchObject({});
  });

  const COMMENT_1 = { id: 1, body: 'body 1', postId: 1 };
  const COMMENT_2 = { id: 2, body: 'body 2', postId: 1 };
  it('should add comments from fetchCommentsFulfilled', () => {
    const action = fetchCommentsFulfilled([COMMENT_1, COMMENT_2]);
    const state = reducer(undefined, action);

    expect(state).toMatchObject({
      1: COMMENT_1,
      2: COMMENT_2,
    });
  });

  it('should replace old commends if present', () => {
    const firstAction = fetchCommentsFulfilled([COMMENT_1]);
    const secondAction = fetchCommentsFulfilled([COMMENT_2]);
    const state = [firstAction, secondAction].reduce(reducer, undefined);

    expect(state).toMatchObject({ 2: COMMENT_2 });
    expect(state).not.toMatchObject({ 1: COMMENT_1 });
  });
});
