import ListIssuesBootstrap from '../components/ListIssuesBootstrap';

import { connect } from 'react-redux';
import { getPullsList } from '../../pulls';

export default connect(state => ({
  list: getPullsList(state),
}))(ListIssuesBootstrap);
