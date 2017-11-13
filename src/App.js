import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Welcome from './Welcome';

export default () => (
  <Provider store={store}>
    <div>
      <Welcome />
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
