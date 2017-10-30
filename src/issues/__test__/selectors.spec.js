import githubIssues from 'github-issues-response';
import reduce from '../../reducer';

import { fetchIssuesFulfilled } from '../actions';
import { getIssuesList, getIssues } from '../selectors';

describe('getIssues', () => {
  it('should get loaded data', () => {
    const state = reduce(undefined, fetchIssuesFulfilled(githubIssues));
    const result = getIssues(state);

    expect(result).toMatchObject({
      5: { number: 5 },
    });
    expect(result).not.toMatchObject({
      13: { number: 13 },
    });
  });
});

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
