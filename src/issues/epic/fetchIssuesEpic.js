import {
  FETCH_ISSUES,
  fetchIssuesFulfilled,
  fetchIssuesRejected,
} from 'issues';

import api from 'api';

export default action$ =>
  action$
    .ofType(FETCH_ISSUES)
    .switchMap(action => api.get(`/repos/${action.repo}/issues?per_page=100`))
    .map(result => fetchIssuesFulfilled(result.response))
    .catch(fetchIssuesRejected);
