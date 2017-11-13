import React from 'react';

import Comments from './Comments';
import ViewLink from '../containers/ViewLink';

const DUMMY_COMMENTS = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
];

export default function Post(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      {props.post.body} <br />
      Comments:
      <Comments comments={DUMMY_COMMENTS} />
      <ViewLink text="Back" root="welcome" />
    </div>
  );
}
