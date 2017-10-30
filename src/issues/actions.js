export const FETCH_ISSUES = 'FETCH_ISSUES';
export const fetchIssues = repo => ({
  type: FETCH_ISSUES,
  repo,
});

export const FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE';
export const fetchIssuesFailure = response => ({
  type: FETCH_ISSUES_FAILURE,
  response,
});

export const FETCH_ISSUES_FULFILLED = 'FETCH_ISSUES_FULFILLED';
export const fetchIssuesFulfilled = payload => ({
  type: FETCH_ISSUES_FULFILLED,
  payload,
});
