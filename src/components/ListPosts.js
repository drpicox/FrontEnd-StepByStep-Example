import React from 'react';

import ViewLink from '../containers/ViewLink';

export default function ListPosts(props) {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <ViewLink text={post.title} root="post" id={post.id} />
        </li>
      ))}
    </ul>
  );
}
