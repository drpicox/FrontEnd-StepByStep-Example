import { combineReducers } from 'redux';

import posts from './posts/reducer';
import view from './view/reducer';

export default combineReducers({
  posts,
  view,
});
