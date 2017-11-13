import React from 'react';

export default function ListPosts(props) {
  return (
    <ul>{props.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
  );
}
