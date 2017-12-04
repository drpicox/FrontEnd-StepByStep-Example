import { connect } from 'react-redux';

import { getSearchPostList } from '../selectors';
import ListPosts from '../components/ListPosts';

function mapStateToProps(state) {
  return {
    posts: getSearchPostList(state),
  };
}

const ListSearchPosts = connect(mapStateToProps)(ListPosts);

export default ListSearchPosts;
