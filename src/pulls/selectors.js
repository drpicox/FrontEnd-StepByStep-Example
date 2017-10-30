import { createSelector } from 'reselect';

export const getPulls = state => state.pulls;

export const getPullsList = createSelector([getPulls], pulls =>
  Object.values(pulls),
);
