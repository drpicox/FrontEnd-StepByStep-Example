import React from 'react';

export default function Post(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      {props.post.body} <br />
      Comments:
      <ul>
        <li>Alice: ada sda sd a sdadf</li>
        <li>Bob: bo boboboo bo bo</li>
      </ul>
    </div>
  );
}
