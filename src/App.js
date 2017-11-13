import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import CurrentViewRoot from './containers/CurrentViewRoot';

export default () => (
  <Provider store={store}>
    <CurrentViewRoot />
  </Provider>
);
