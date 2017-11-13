import React from 'react';

export default function Comments(props) {
  return (
    <ul>
      {props.comments.map(comment => (
        <li>
          {comment.name} ({comment.email})<br />
          {comment.body}
        </li>
      ))}
    </ul>
  );
}
