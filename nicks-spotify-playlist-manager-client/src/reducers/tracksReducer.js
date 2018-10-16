function tracksReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TRACKS_SUCCESS':
      return action.playlists;

    //case 'CREATE_PLAYLIST_SUCCESS':
    //  return state.concat(action.playlist);

    case 'FETCH_TRACK':
      return action.playlist;

    default:
       return state;
    }
}

export default tracksReducer
