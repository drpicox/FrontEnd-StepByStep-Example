import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

export default () => (
  <Provider store={store}>
    <h1>Hello World</h1>
  </Provider>
);
