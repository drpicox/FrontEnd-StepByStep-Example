import { combineEpics } from 'redux-observable';

import ajax from '../api';

import { SET_VIEW } from '../actions';
import {
  fetchComments,
  FETCH_COMMENTS,
  fetchCommentsFulfilled,
} from './actions';

export function onViewPostFetchCommentsEpic(action$) {
  return action$
    .ofType(SET_VIEW)
    .filter(action => action.root === 'post')
    .map(action => fetchComments(action.id));
}

export function fetchPostsEpic(action$) {
  return action$
    .ofType(FETCH_COMMENTS)
    .mergeMap(action =>
      ajax
        .get(`/posts/${action.postId}/comments`)
        .map(result => fetchCommentsFulfilled(result.response)),
    );
}

export default combineEpics(fetchPostsEpic, onViewPostFetchCommentsEpic);
