import githubIssues from 'github-issues-response';
import reduce from '../../reducer';

import { fetchIssuesFulfilled } from '../../issues/actions';
import { getPulls, getPullsList } from '../selectors';

describe('getPulls', () => {
  it('should get loaded data', () => {
    const state = reduce(undefined, fetchIssuesFulfilled(githubIssues));
    const result = getPulls(state);

    expect(result).not.toMatchObject({
      5: { number: 5 },
    });
    expect(result).toMatchObject({
      13: { number: 13 },
    });
  });
});

describe('getPullsList', () => {
  let state;
  beforeEach(() => {
    state = reduce(undefined, fetchIssuesFulfilled(githubIssues));
  });

  it('should get data as a list', () => {
    const result = getPullsList(state);
    expect(result).toEqual(expect.any(Array));
  });

  it('should contain all values from getPulls', () => {
    const result = getPullsList(state);
    expect(result).toEqual(Object.values(getPulls(state)));
  });

  it('should return the same instance if the state does not changes', () => {
    const firstResult = getPullsList(state);
    const secondResult = getPullsList(state);
    expect(firstResult).toBe(secondResult);
  });
});
