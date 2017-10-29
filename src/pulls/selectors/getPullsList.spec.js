import githubIssues from 'github-issues-response';
import reduce from '../../reducer';

import { fetchIssuesFulfilled } from '../../issues/actions';
import { getPulls } from './getPulls';
import { getPullsList } from './getPullsList';

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
