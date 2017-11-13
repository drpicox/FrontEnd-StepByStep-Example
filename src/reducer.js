import { combineReducers } from 'redux';

function doNothingReducer(state, action) {
  return action;
}
//import labels from './labels/reducer';

export default combineReducers({
  doNothingReducer,
});
