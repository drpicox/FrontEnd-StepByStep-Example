import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import CurrentViewRoot from './containers/CurrentViewRoot';
import { getPostsList } from './posts/selectors';
import { fetchPosts } from './posts/actions';

// On App start fetch posts if none present
const state = store.getState();
if (getPostsList(state).length === 0) {
  store.dispatch(fetchPosts());
}

export default () => (
  <Provider store={store}>
    <CurrentViewRoot />
  </Provider>
);
