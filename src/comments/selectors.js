import { createSelector } from 'reselect';

export function getComments(state) {
  return state.comments;
}

export const getCommentsList = createSelector([getComments], comments =>
  Object.values(comments),
);
