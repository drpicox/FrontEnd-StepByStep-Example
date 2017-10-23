import { SET_CURRENT_REPO, fetchIssues } from '../../redux/actions';

export default action$ =>
  action$.ofType(SET_CURRENT_REPO).map(action => fetchIssues(action.repo));
