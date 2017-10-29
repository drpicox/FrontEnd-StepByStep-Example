import githubIssues from 'github-issues-response';
import reduce from '../../reducer';

import { fetchIssuesFulfilled } from '../actions';
import { getIssuesList, getIssues } from './';

describe('getIssuesList', () => {
  let state;
  beforeEach(() => {
    state = reduce(undefined, fetchIssuesFulfilled(githubIssues));
  });

  it('should get data as a list', () => {
    const result = getIssuesList(state);
    expect(result).toEqual(expect.any(Array));
  });

  it('should contain all values from getIssues', () => {
    const result = getIssuesList(state);
    expect(result).toEqual(Object.values(getIssues(state)));
  });

  it('should return the same instance if the state does not changes', () => {
    const firstResult = getIssuesList(state);
    const secondResult = getIssuesList(state);
    expect(firstResult).toBe(secondResult);
  });
});
