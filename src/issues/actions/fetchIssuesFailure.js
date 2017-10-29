export const FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE';
export const fetchIssuesFailure = response => ({
  type: FETCH_ISSUES_FAILURE,
  response,
});
