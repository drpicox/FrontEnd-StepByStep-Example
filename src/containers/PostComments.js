import { connect } from 'react-redux';

import { getPostCommentsList } from '../selectors';
import Comments from '../components/Comments';

function mapStateToProps(state, { postId }) {
  const comments = getPostCommentsList(state, { postId });
  return {
    comments,
  };
}

const PostComments = connect(mapStateToProps)(Comments);

export default PostComments;
