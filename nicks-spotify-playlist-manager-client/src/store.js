import {
  createStore,
  applyMiddleware,
  combineReducers } from 'redux';
import thunk from 'redux-thunk';

const PlaylistsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PLAYLISTS-SUCCESS':
      return state.playlists

    default:
      return state
  }
}

const reducers = combineReducers({
  playlists: PlaylistsReducer
})
const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);



//import playlistFormData from './reducers/playlistFormData';
/* import PlaylistsReducer from './reducers/PlaylistsReducer'

const reducers = combineReducers({
  PlaylistsReducer
})

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);

*/
