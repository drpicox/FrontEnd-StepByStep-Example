import { combineReducers } from 'redux';

import issues from './issues/reducer';
//import labels from './labels/reducer';
import pulls from './pulls/reducer';
import repos from './repos/reducer';
//import users from './users/reducer';

export default combineReducers({
  issues,
  //labels,
  pulls,
  repos,
  //users,
});
