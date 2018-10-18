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

       /*
           case 'DELETE_PLAYLIST':
             const removalIndex = state.playlists.findIndex(playlist =>
              playlist.id === action.id)
             return (
               {...state,
                 playlists: [
                   ...state.playlists.slice(0, removalIndex),
                   ...state.playlists.slice(removalIndex + 1)
                 ]}
             ) */
           }
       }


export default playlistsReducer






/*
export default( state={ loading: false, playlists: []}, action ) => {
  switch( action.type ) {
        case 'LOADING_PLAYLISTS':
            return {...state, loading: true}
        case 'FETCH_PLAYLISTS':
            return {...state, playlists: action.payload, loading: false}
        case 'CREATE_PLAYLIST':
            return {...state, playlists: state.playlists.concat(action.payload)}
        case 'UPDATE_PLAYLIST':
            const playlist = action.payload
            const index = state.playlists.findIndex(p => p.id === playlist.id);
            return {...state, playlists: [...state.playlists.slice(0, index), playlist, ...state.playlists.slice(index + 1)]}
        case 'DELETE_PLAYLIST':
            const newState = state.playlists.filter(p => p.id !== parseInt(action.payload, 10))
            return {...state, playlists: newState}
        default:
            return state
    }
}
*/
