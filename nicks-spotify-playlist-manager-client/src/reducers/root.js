import { combineReducers } from 'redux';
import playlistsReducer from './playlistsReducer';
//import songsReducer from './songsReducer';

export default combineReducers({
  playlists: playlistsReducer
})
