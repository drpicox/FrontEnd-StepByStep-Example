import { SET_VIEW } from './actions';

export default function viewReducer(state = { root: 'welcome' }, action) {
  switch (action.type) {
    case SET_VIEW:
      return {
        root: action.root,
        id: action.id,
      };
    default:
      return state;
  }
}
