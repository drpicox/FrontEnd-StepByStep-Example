import { SET_CURRENT_REPO } from './actions';

export default (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_REPO: {
      const { repo } = action;
      return repo;
    }
    default:
      return state;
  }
};
