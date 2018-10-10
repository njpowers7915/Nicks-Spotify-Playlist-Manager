function playlistsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_PLAYLISTS_SUCCESS':
      return action.playlists;

    case 'CREATE_PLAYLIST_SUCCESS':
      return state.concat(action.playlist);

    case 'FETCH_PLAYLIST':
      return action.playlist;

    default:
       return state;

    /*case 'DELETE_PLAYLIST':
      const removalIndex = state.playlists.findIndex(playlist =>
       playlist.id === action.id)
      return (
        {...state,
          playlists: [
            ...state.playlists.slice(0, removalIndex),
            ...state.playlists.slice(removalIndex + 1)
          ]}
      )*/

    }
}

export default playlistsReducer
