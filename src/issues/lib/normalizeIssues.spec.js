import issuesResponse from 'github-issues-response';

import normalizeIssues from './normalizeIssues';

describe('normalizeIssues', () => {
  let result;
  beforeEach(() => {
    result = normalizeIssues(issuesResponse);
  });

  it('should add issues', () => {
    expect(result).toMatchObject({
      5: { number: 5 },
      8: { number: 8 },
    });
  });

  it('should set user as login', () => {
    expect(result).toMatchObject({
      5: { user: 'drpicox' },
    });
  });

  it('should set labels as name', () => {
    expect(result).toMatchObject({
      5: { labels: ['score-1', 'bug'] },
    });
  });
});
