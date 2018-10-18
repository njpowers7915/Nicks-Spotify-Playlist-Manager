import { resetPlaylistForm } from './playlistFormActions';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchPlaylists() {
  return (dispatch) => {
    dispatch({type: 'LOADING_PLAYLISTS'})
    return fetch(`${API_URL}/playlists.json`)
    .then(response => response.json())
    .then(playlists => dispatch({type: 'FETCH_PLAYLISTS', payload: playlists }))
  }
}

export function getPlaylist(id) {
    return dispatch => {
        dispatch({type: 'GET_PLAYLIST', payload: id})
    }
}

export function createPlaylist(data) {
    return dispatch => {
        return fetch(`${API_URL}/playlists`, {
            method: 'POST',
            body: JSON.stringify({playlist: data}),
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then(resp => resp.json())
            .then(jresp => {
                dispatch({
                    type: 'CREATE_PLAYLIST',
                    payload: jresp
                })
            })
            .catch((errors) => {
                console.log(errors)
                // dispatch(authFailure(errors))
            })
    }
}

export function updatePlaylist(data) {
    return dispatch => {
        return fetch(`${API_URL}/playlists/${data.id}`, {
            method: 'PATCH',
            body: JSON.stringify({playlist: data}),
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then(resp => resp.json())
            .then(jresp => {
                dispatch({
                    type: 'UPDATE_PLAYLIST',
                    payload: jresp
                })
            })
            .catch((errors) => {
                console.log(errors)
            })
    }
}

export function deletePlaylist(playlistId) {
    return dispatch => {
        return fetch(`${API_URL}/playlists/${playlistId}`, {
            method: 'DELETE',
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then(() => {
                dispatch({
                    type: 'DELETE_PLAYLIST',
                    payload: playlistId
                })
            })
            .catch((errors) => {
                console.log(errors)
            })
    }
}

/*
// ** Action Creators **
const setPlaylists = playlists => {
  return {
    type: 'FETCH_PLAYLISTS_SUCCESS',
    playlists
  }
}

const setPlaylist = playlist => {
  return {
    type: 'FETCH_PLAYLIST_SUCCESS',
    playlist
  }
}

const addPlaylist = playlist => {
  return {
    type: 'CREATE_PLAYLIST_SUCCESS',
    playlist
  }
}

// ** Async Actions **
export const fetchPlaylists = () => {
  return dispatch => {
    return fetch(`${API_URL}/playlists`)
      .then(response => response.json())
      .then(playlists => dispatch(setPlaylists(playlists.data)))
      .catch(error => console.log(error));
  }
}

export function fetchPlaylist(id) {
  return dispatch => {
    return fetch(`${API_URL}/playlists/${id}`)
      .then(response => response.json())
      .then(playlist => dispatch(setPlaylist(playlist.data)))
      .catch(error => console.log(error));
  }
}

export const fetchPlaylist = id => {
  return dispatch => {
    return fetch(`${API_URL}/playlists/${id}`)
      .then(response => response.json())
      .then(playlist => dispatch({
        type: 'FETCH_PLAYLIST',
        payload: playlist.playlist
      }))
  }
}

export const createPlaylist = playlist => {
  return dispatch => {
    return fetch(`${API_URL}/playlists`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playlist: playlist })
    })
      .then(response => response.json())
      .then(playlist => {
        dispatch(addPlaylist(playlist))
        dispatch(resetPlaylistForm())
      })
      .catch(error => console.log(error))
  }
}
*/
