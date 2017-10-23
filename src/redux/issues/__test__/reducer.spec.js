import issuesResponse from 'github-issues-response';

import { fetchIssuesFulfilled } from '../actions';
import reduce from '../reducer';

describe('reduce(issues)', () => {
  it('should initialize as an object', () => {
    const state = reduce(undefined, {});
    expect(state).toMatchObject({});
  });

  it('should not modify the state for an unknown action', () => {
    const prevState = { company: 'acme' };
    const nextState = reduce(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

  describe('when fetchIssuesFullfilled', () => {
    let state;
    beforeEach(() => {
      state = reduce(undefined, fetchIssuesFulfilled(issuesResponse));
    });

    it('should add issues', () => {
      expect(state).toMatchObject({
        5: { number: 5 },
        8: { number: 8 },
      });
    });

    it('should not add pulls', () => {
      expect(state).not.toMatchObject({
        13: { number: 13 },
      });
    });

    it('should set user as login', () => {
      expect(state).toMatchObject({
        5: { user: 'drpicox' },
      });
    });

    it('should set labels as name', () => {
      expect(state).toMatchObject({
        5: { labels: ['score-1', 'bug'] },
      });
    });
  });
});
