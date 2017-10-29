import { createSelector } from 'reselect';

import { getIssues } from './getIssues';

export const getIssuesList = createSelector([getIssues], issues =>
  Object.values(issues),
);
