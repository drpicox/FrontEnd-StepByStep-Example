import { createSelector } from 'reselect';

export const getIssues = state => state.issues;

export const getIssuesList = createSelector([getIssues], issues =>
  Object.values(issues),
);
