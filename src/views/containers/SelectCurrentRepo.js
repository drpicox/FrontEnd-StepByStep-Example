import SelectString from '../components/SelectString';

import { connect } from 'react-redux';
import { getRepoList, getCurrentRepo } from '../../selectors';
import { setCurrentRepo } from '../../actions';

export default connect(
  state => ({
    options: getRepoList(state),
    value: getCurrentRepo(state) || '',
  }),
  {
    onChange: setCurrentRepo,
  },
)(SelectString);
