import {
  createStore,
  applyMiddleware,
  combineReducers } from 'redux';
import thunk from 'redux-thunk';

const playlistsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PLAYLISTS_SUCCESS':
      return action.playlists;

    default:
      return state
  }
}

//const rootReducer = combineReducers({
//  playlists
//});


//import playlistFormData from './reducers/playlistFormData';
//import PlaylistsReducer from './reducers/PlaylistsReducer'

const reducers = combineReducers({
  playlistsReducer
})

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
