import React from 'react';

import ListAllPosts from '../containers/ListAllPosts';
import Search from './Search';

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to my Blog</h1>
      <Search />
      <br />
      Posts:
      <ListAllPosts />
    </div>
  );
}
