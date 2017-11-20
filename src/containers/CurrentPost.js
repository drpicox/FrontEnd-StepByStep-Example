import { connect } from 'react-redux';

import { getPost, getViewId } from '../selectors';
import Post from '../components/Post';

function mapStateToProps(state) {
  const postId = getViewId(state);
  const post = getPost(state, { postId });
  return {
    post,
  };
}

const CurrentPost = connect(mapStateToProps)(Post);

export default CurrentPost;
