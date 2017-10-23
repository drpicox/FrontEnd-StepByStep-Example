import { combineReducers } from 'redux';

import current from './current/reducer';
import list from './list/reducer';

export default combineReducers({
  current,
  list,
});
