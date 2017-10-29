import normalizeIssues from '../issues/lib/normalizeIssues';

import { FETCH_ISSUES_FULFILLED } from '../issues/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ISSUES_FULFILLED: {
      return normalizeIssues(
        action.payload.filter(issue => issue.pull_request),
      );
    }
    default:
      return state;
  }
};
