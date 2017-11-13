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

const mapDispatchToProps = {
  setView,
};

const ViewLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default ViewLink;
