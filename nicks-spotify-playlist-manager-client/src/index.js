import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import store from './store.js'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

/*
import {
  createStore,
  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/CombineReducers'

const middleware = [thunk]

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
*/

/*
ReactDOM.render(
  <div className="App">
    <App />
  </div>,
  document.getElementById('root')
)
*/

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
