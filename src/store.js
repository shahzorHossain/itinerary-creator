import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from './history';

// import the root reducer

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const temporary_prop = ['Temporary', 'Property', 'I', 'Made'];

// create an object for the default data

const defaultState = {
  posts,
  comments,
  temporary_prop
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
