import {
  FETCH_ISSUES,
  fetchIssues,
  FETCH_ISSUES_FAILURE,
  fetchIssuesFailure,
  FETCH_ISSUES_FULFILLED,
  fetchIssuesFulfilled,
} from '../actions';

test('fetchIssues should create an action', () => {
  const action = fetchIssues('a repo');
  expect(action).toMatchObject({
    type: FETCH_ISSUES,
    repo: 'a repo',
  });
});

test('fetchIssuesFullfiled should create an action', () => {
  const action = fetchIssuesFailure('a response');
  expect(action).toMatchObject({
    type: FETCH_ISSUES_FAILURE,
    response: 'a response',
  });
});

test('fetchIssuesFullfiled should create an action', () => {
  const action = fetchIssuesFulfilled('a payload');
  expect(action).toMatchObject({
    type: FETCH_ISSUES_FULFILLED,
    payload: 'a payload',
  });
});
