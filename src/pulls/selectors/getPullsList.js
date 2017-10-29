import { createSelector } from 'reselect';

import { getPulls } from './getPulls';

export const getPullsList = createSelector([getPulls], pulls =>
  Object.values(pulls),
);
