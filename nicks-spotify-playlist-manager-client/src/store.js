import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import CombineReducers from './reducers/CombineReducers';
//import playlistFormData from './reducers/playlistFormData';

const middleware = [thunk];

export default createStore(
  CombineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
