import { combineReducers } from 'redux';

import comments from './comments/reducer';
import posts from './posts/reducer';
import view from './view/reducer';

export default combineReducers({
  comments,
  posts,
  view,
});
