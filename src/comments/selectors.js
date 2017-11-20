import { createSelector } from 'reselect';

export function getComments(state) {
  return state.comments;
}

export const getCommentsList = createSelector([getComments], comments =>
  Object.values(comments),
);

function getPostId(state, { postId }) {
  return postId;
}

export const getPostCommentsList = createSelector(
  [getCommentsList, getPostId],
  (commentsList, postId) =>
    commentsList.filter(comment => comment.postId === postId),
);
