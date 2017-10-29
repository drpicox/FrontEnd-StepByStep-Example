import { FETCH_ISSUES_FAILURE, fetchIssuesFailure } from './fetchIssuesFailure';

test('fetchIssuesFullfiled should create an action', () => {
  const action = fetchIssuesFailure('a response');
  expect(action).toMatchObject({
    type: FETCH_ISSUES_FAILURE,
    response: 'a response',
  });
});
