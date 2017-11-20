export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export function fetchComments(postId) {
  return {
    type: FETCH_COMMENTS,
    postId,
  };
}

export const FETCH_COMMENTS_FULFILLED = 'FETCH_COMMENTS_FULFILLED';
export function fetchCommentsFulfilled(payload) {
  return {
    type: FETCH_COMMENTS_FULFILLED,
    payload,
  };
}
