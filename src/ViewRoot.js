import React from 'react';

import Post from './Post';
import Welcome from './Welcome';

const DUMMY_POST = {
  userId: 1,
  id: 4,
  title: 'eum et est occaecati',
  body:
    'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
};

export default function ViewRoot(props) {
  switch (props.root) {
    case 'welcome':
      return <Welcome />;
    case 'post':
      return <Post post={DUMMY_POST} />;
    default:
      return <span>Not Found 404</span>;
  }
}
