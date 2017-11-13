import { connect } from 'react-redux';

import { setView } from '../actions';

import Link from '../components/Link';

function mapStateToProps(state, ownProps) {
  return {
    text: ownProps.text,
    root: ownProps.root,
    id: ownProps.id,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setView: (root, id) => {
      dispatch(setView(root, id));
    },
  };
};

const ViewLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default ViewLink;
