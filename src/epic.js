import 'rxjs/Rx';

import { combineEpics } from 'redux-observable';

import issuesEpic from './issues/epic';
import pullsEpic from './pulls/epic';
import reposEpic from './repos/epic';

export default combineEpics(issuesEpic, pullsEpic, reposEpic);
