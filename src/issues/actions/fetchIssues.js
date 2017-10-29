export const FETCH_ISSUES = 'FETCH_ISSUES';
export const fetchIssues = repo => ({
  type: FETCH_ISSUES,
  repo,
});
