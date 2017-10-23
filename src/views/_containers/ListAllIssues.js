import ListIssues from '../_components/ListIssues';

import { connect } from 'react-redux';
import { getIssuesList } from '../../redux/selectors';

export default connect(state => ({
  list: getIssuesList(state),
}))(ListIssues);
