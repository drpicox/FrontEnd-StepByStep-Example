import { combineEpics } from 'redux-observable';
import {
  SET_CURRENT_REPO,
  fetchIssues,
  FETCH_ISSUES,
  fetchIssuesFulfilled,
  fetchIssuesRejected,
} from '../actions';

import api from '../api';

export const fetchIssuesEpic = action$ =>
  action$
    .ofType(FETCH_ISSUES)
    .switchMap(action => api.get(`/repos/${action.repo}/issues?per_page=100`))
    .map(result => fetchIssuesFulfilled(result.response))
    .catch(fetchIssuesRejected);

export const setCurrentRepoEpic = action$ =>
  action$.ofType(SET_CURRENT_REPO).map(action => fetchIssues(action.repo));

export default combineEpics(setCurrentRepoEpic, fetchIssuesEpic);
