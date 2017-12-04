import { createSelector } from 'reselect';
import { getPostsList } from '../selectors';

export function getSearch(state) {
  return state.search;
}

export const getSearchPostList = createSelector(
  [getPostsList, getSearch],
  (postsList, search) =>
    postsList.filter(post => post.title.toLowerCase().includes(search)),
);
