import React from 'react';

import Link from './Link';
export default function ListPosts(props) {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link text={post.title} />
        </li>
      ))}
    </ul>
  );
}
