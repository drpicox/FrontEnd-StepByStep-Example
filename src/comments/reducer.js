import { FETCH_COMMENTS_FULFILLED } from './actions';

export default function comments(state = {}, action) {
  switch (action.type) {
    case FETCH_COMMENTS_FULFILLED:
      const newState = {};
      action.payload.forEach(comment => (newState[comment.id] = comment));
      return newState;
    default:
      return state;
  }
}
