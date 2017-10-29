import ListIssues from '../components/ListIssues';

import { connect } from 'react-redux';
import { getIssuesList } from '../../issues';

export default connect(state => ({
  list: getIssuesList(state),
}))(ListIssues);
