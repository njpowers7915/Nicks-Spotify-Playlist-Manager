import { combineReducers } from 'redux';
import playlistsReducer from './playlistsReducer';
import tracksReducer from './tracksReducer';
import authReducer from './authReducer';

export default combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer,
  auth: authReducer
})
