import SelectString from '../components/SelectString';

import { connect } from 'react-redux';
import { getRepoList } from '../../repos.list';
import { getCurrentRepo } from '../../repos.current';
import { setCurrentRepo } from '../../repos.current';

export default connect(
  state => ({
    options: getRepoList(state),
    value: getCurrentRepo(state) || '',
  }),
  {
    onChange: setCurrentRepo,
  },
)(SelectString);
