import { FETCH_ISSUES, fetchIssues } from './fetchIssues';

test('fetchIssues should create an action', () => {
  const action = fetchIssues('a repo');
  expect(action).toMatchObject({
    type: FETCH_ISSUES,
    repo: 'a repo',
  });
});
