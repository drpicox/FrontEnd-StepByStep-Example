import { combineEpics } from 'redux-observable';

import setCurrentRepoEpic from './setCurrentRepoEpic';
import fetchIssuesEpic from './fetchIssuesEpic';

export default combineEpics(setCurrentRepoEpic, fetchIssuesEpic);
