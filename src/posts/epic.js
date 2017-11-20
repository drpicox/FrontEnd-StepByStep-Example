import ajax from '../api';
import { FETCH_POSTS, fetchPostsFulfilled } from './actions';

export function fetchPostsEpic(action$) {
  return action$
    .ofType(FETCH_POSTS)
    .mergeMap(action =>
      ajax.get('/posts').map(result => fetchPostsFulfilled(result.response)),
    );
}

export default fetchPostsEpic;
