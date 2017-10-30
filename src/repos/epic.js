import { combineEpics } from 'redux-observable';

import currentEpic from './current/epic';
import listEpic from './list/epic';

export default combineEpics(currentEpic, listEpic);
