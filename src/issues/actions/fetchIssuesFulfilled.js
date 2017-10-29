export const FETCH_ISSUES_FULFILLED = 'FETCH_ISSUES_FULFILLED';
export const fetchIssuesFulfilled = payload => ({
  type: FETCH_ISSUES_FULFILLED,
  payload,
});
