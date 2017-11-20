import { SET_VIEW } from '../actions';
import { fetchComments } from './actions';

export function onViewPostFetchCommentsEpic(action$) {
  return action$
    .ofType(SET_VIEW)
    .filter(action => action.root === 'post')
    .map(action => fetchComments(action.id));
}

export default onViewPostFetchCommentsEpic;
