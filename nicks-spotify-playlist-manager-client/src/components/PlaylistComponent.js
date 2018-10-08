import React from 'react';
import { connect } from 'react-redux'

//import PlaylistComponent from '../components/PlaylistComponent'
//import NewPlaylistForm from './NewPlaylistForm'

//class Playlists extends Component {}

const PlaylistComponent = ({ playlist }) =>
  <div key={playlist.id} className="PlaylistComponent">
    <h3>{playlist.name}</h3>
    <p>Description: {playlist.description}</p>
    {/*<div className="PlaylistSongs">
      <ul>
      <% playlist.songs.each do |song| %>
        <li>song.name</li>
      <% end %>
      </ul>
    </div>*/}
  </div>

const mapStateToProps = (state, ownProps) => {
  const playlist = state.playlists.find(playlist => playlist.id === +ownProps.match.params.playlistId)

  if (playlist) {
    return { playlist }
  } else {
    return { playlist: {} }
  }
}

export default connect(mapStateToProps)(PlaylistComponent);
