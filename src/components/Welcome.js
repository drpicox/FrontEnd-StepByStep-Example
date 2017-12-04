import React from 'react';

import ListSearchPosts from '../containers/ListSearchPosts';
import Search from './Search';

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to my Blog</h1>
      <Search />
      <br />
      Posts:
      <ListSearchPosts />
    </div>
  );
}
