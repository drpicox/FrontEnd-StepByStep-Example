import { createSelector } from 'reselect';

export function getPosts(state) {
  return state.posts;
}

export const getPostsList = createSelector([getPosts], posts =>
  Object.values(posts),
);
