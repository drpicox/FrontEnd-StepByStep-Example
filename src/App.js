import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

export default () => (
  <Provider store={store}>
    <div>
      <h1>Welcome to my Blog</h1>
      <input type="text" placeholder="search" />
      <br />
      Posts:
      <ul>
        <li>Post title 1 »</li>
        <li>Post title 2 »</li>
        <li>Post title 3 »</li>
      </ul>
      <hr />
      <h1>Post title 1</h1>
      Body bla bla bla bla bla bla bla <br />
      Comments:
      <ul>
        <li>Alice: ada sda sd a sdadf</li>
        <li>Bob: bo boboboo bo bo</li>
      </ul>
    </div>
  </Provider>
);
