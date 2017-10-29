import { combineReducers } from 'redux';

import current from '../repos.current/reducer';
import list from '../repos.list/reducer';

export default combineReducers({
  current,
  list,
});
