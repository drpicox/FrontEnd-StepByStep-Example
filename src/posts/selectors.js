import { createSelector } from 'reselect';

export function getPosts(state) {
  return state.posts;
}

export function getPost(state, { postId }) {
  return getPosts(state)[postId];
}

export const getPostsList = createSelector([getPosts], posts =>
  Object.values(posts),
);
