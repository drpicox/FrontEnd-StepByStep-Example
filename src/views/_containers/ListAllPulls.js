import ListIssuesBootstrap from '../_components/ListIssuesBootstrap';

import { connect } from 'react-redux';
import { getPullsList } from '../../redux/selectors';

export default connect(state => ({
  list: getPullsList(state),
}))(ListIssuesBootstrap);
