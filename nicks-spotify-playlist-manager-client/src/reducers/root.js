import { combineReducers } from 'redux';
import playlistsReducer from './playlistsReducer';
import tracksReducer from './tracksReducer';

export default combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer
})
