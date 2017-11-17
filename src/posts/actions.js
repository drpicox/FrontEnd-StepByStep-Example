export const FETCH_POSTS = 'FETCH_POSTS';
export function fetchPosts() {
  return {
    type: FETCH_POSTS,
  };
}

export const FETCH_POSTS_FULFILLED = 'FETCH_POSTS_FULFILLED';
export function fetchPostsFulfilled(payload) {
  return {
    type: FETCH_POSTS_FULFILLED,
    payload,
  };
}
