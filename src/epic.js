import 'rxjs/Rx';

import { combineEpics } from 'redux-observable';

import commentsEpic from './comments/epic';
import postsEpic from './posts/epic';

export default combineEpics(commentsEpic, postsEpic);
