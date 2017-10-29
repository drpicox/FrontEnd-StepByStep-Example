import {
  FETCH_ISSUES_FULFILLED,
  fetchIssuesFulfilled,
} from './fetchIssuesFulfilled';

test('fetchIssuesFullfiled should create an action', () => {
  const action = fetchIssuesFulfilled('a payload');
  expect(action).toMatchObject({
    type: FETCH_ISSUES_FULFILLED,
    payload: 'a payload',
  });
});
