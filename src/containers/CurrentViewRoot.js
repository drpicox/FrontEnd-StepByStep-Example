import { connect } from 'react-redux';

import { getViewRoot } from '../selectors';
import ViewRoot from '../components/ViewRoot';

function mapStateToProps(state) {
  return {
    root: getViewRoot(state),
  };
}

const CurrentViewRoot = connect(mapStateToProps)(ViewRoot);

export default CurrentViewRoot;
