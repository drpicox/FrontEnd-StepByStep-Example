import 'rxjs/Rx';

import { combineEpics } from 'redux-observable';

import postsEpic from './posts/epic';

export default combineEpics(postsEpic);
