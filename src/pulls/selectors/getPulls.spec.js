import githubIssues from 'github-issues-response';
import reduce from '../../reducer';

import { fetchIssuesFulfilled } from '../../issues/actions';
import { getPulls } from './getPulls';

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
