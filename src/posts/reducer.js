import { FETCH_POSTS_FULFILLED } from './actions';

export default function posts(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS_FULFILLED:
      const newState = {};
      action.payload.forEach(post => {
        newState[post.id] = post;
      });
      return newState;
    default:
      return state;
  }
}
