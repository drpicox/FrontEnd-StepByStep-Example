import React from 'react';

import PostComments from '../containers/PostComments';
import ViewLink from '../containers/ViewLink';

export default function Post(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      {props.post.body} <br />
      Comments:
      <PostComments postId={props.post.id} />
      <ViewLink text="Back" root="welcome" />
    </div>
  );
}
