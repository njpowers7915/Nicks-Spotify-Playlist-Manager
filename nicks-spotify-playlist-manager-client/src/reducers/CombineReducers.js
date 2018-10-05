import { combineReducers } from 'redux';
import PlaylistsReducer from './PlaylistsReducer';
//import songsReducer from './songsReducer';

export default CombineReducers({
  playlists: PlaylistsReducer
})
