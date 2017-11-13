import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ViewRoot from './ViewRoot';

export default () => (
  <Provider store={store}>
    <ViewRoot root="welcome" />
  </Provider>
);
