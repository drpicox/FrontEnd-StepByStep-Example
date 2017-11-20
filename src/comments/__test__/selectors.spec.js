import { getCommentsList, getPostCommentsList } from '../selectors';

const COMMENT_1 = { id: 1, body: 'post 1', postId: 1 };
const COMMENT_2 = { id: 2, body: 'post 2', postId: 1 };
const COMMENT_3 = { id: 3, body: 'post 3', postId: 2 };
const STATE = {
  comments: {
    1: COMMENT_1,
    2: COMMENT_2,
    3: COMMENT_3,
  },
};

describe('getCommentsList', () => {
  it('should return the list of comments', () => {
    const posts = getCommentsList(STATE);
    expect(posts).toEqual([COMMENT_1, COMMENT_2, COMMENT_3]);
  });

  it('should return the same instance if called twice without changes', () => {
    const posts1 = getCommentsList(STATE);
    const posts2 = getCommentsList(STATE);

    expect(posts1).toBe(posts2);
  });
});

describe('getPostCommentsList', () => {
  it('should return the list of comments of one post', () => {
    const posts = getPostCommentsList(STATE, { postId: 1 });
    expect(posts).toEqual([COMMENT_1, COMMENT_2]);
  });

  it('should return the same instance if called twice without changes', () => {
    const posts1 = getPostCommentsList(STATE, { postId: 1 });
    const posts2 = getPostCommentsList(STATE, { postId: 1 });

    expect(posts1).toBe(posts2);
  });
});
