import { fetchIssues } from 'issues';
import { SET_CURRENT_REPO } from 'repos';

export default action$ =>
  action$.ofType(SET_CURRENT_REPO).map(action => fetchIssues(action.repo));
