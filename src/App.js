import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Post from './Post';
import Welcome from './Welcome';

const DUMMY_POST = {
  userId: 1,
  id: 4,
  title: 'eum et est occaecati',
  body:
    'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
};

export default () => (
  <Provider store={store}>
    <div>
      <Welcome />
      <hr />
      <Post post={DUMMY_POST} />
    </div>
  </Provider>
);
