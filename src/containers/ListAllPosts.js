import { connect } from 'react-redux';

import { getPostsList } from '../selectors';
import ListPosts from '../components/ListPosts';

function mapStateToProps(state) {
  return {
    posts: getPostsList(state),
  };
}

const ListAllPosts = connect(mapStateToProps)(ListPosts);

export default ListAllPosts;
