import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import './index.css';
import store from './store.js'
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

console.log(store)


ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();
