import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import appReducer from './reducer';
import appEpic from './epic';

let enhancer = applyMiddleware(createEpicMiddleware(appEpic));

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(appReducer, enhancer);
