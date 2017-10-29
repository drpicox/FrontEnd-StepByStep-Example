import githubIssues from 'github-issues-response';
import reduce from 'reducer';

import { fetchIssuesFulfilled } from '../actions';
import { getIssues } from './getIssues';

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
