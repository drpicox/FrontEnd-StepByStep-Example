import React from 'react';

import ListSearchPosts from '../containers/ListSearchPosts';
import CurrentSearch from '../containers/CurrentSearch';

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to my Blog</h1>
      <CurrentSearch />
      <br />
      Posts:
      <ListSearchPosts />
    </div>
  );
}
