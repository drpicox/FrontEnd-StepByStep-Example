import 'rxjs/Rx';

import { combineEpics } from 'redux-observable';

function doNothingEpic(action$) {
  return action$.filter(() => false);
}
// import issuesEpic from './issues/epic';

export default combineEpics(doNothingEpic);
