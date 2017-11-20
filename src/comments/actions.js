export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function fetchComments(postId) {
  return {
    type: FETCH_COMMENTS,
    postId,
  };
}
