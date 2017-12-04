import { SET_SEARCH } from './actions';

export default function searchReducer(state = '', action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.search;
    default:
      return state;
  }
}
