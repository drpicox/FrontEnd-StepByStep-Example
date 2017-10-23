import SelectString from '../_components/SelectString';

import { connect } from 'react-redux';
import { getCurrentRepo, getRepoList } from '../../redux/selectors';
import { setCurrentRepo } from '../../redux/actions';

export default connect(
  state => ({
    options: getRepoList(state),
    value: getCurrentRepo(state) || '',
  }),
  {
    onChange: setCurrentRepo,
  },
)(SelectString);
