import { getPostsList, getPost } from '../selectors';

const POST_1 = { id: 1, title: 'post 1' };
const POST_2 = { id: 2, title: 'post 2' };
const POST_3 = { id: 3, title: 'post 3' };
const STATE = {
  posts: {
    1: POST_1,
    2: POST_2,
    3: POST_3,
  },
};

describe('getPostsList', () => {
  it('should return the list of posts', () => {
    const posts = getPostsList(STATE);
    expect(posts).toEqual([POST_1, POST_2, POST_3]);
  });

  it('should return the same instance if called twice without changes', () => {
    const posts1 = getPostsList(STATE);
    const posts2 = getPostsList(STATE);

    expect(posts1).toBe(posts2);
  });
});

describe('getPost', () => {
  it('should return the requested post', () => {
    const post = getPost(STATE, { postId: 1 });

    expect(post).toBe(POST_1);
  });
});
