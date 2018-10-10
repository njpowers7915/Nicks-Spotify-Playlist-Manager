import React from 'react';
import { connect } from 'react-redux'
//import { fetchPlaylist } from '../actions/PlaylistsActions'

//import PlaylistComponent from '../components/PlaylistComponent'
//import NewPlaylistForm from './NewPlaylistForm'

//class Playlists extends Component {}
/*
class PlaylistComponent extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId)
  }

  render() {

    return(
      <div key={match.params.playlistId} className="PlaylistComponent">
        <h3>{this.props.playlist.name}</h3>
        <p>Description: {this.props.playlist.description}</p>
      </div>
    )
  }
}
*/

const PlaylistComponent = ({playlist}) =>
  <div key={playlist.id} className="PlaylistComponent">
    <h3>{playlist.name}</h3>
    <p>Description: {playlist.description}</p>
    <h3>SONG LIST</h3>
    {/*<div className="PlaylistSongs">
      <ul>
      <% playlist.songs.each do |song| %>
        <li>song.name</li>
      <% end %>
      </ul>
    </div> */}
  </div>;


const mapStateToProps = (state, ownProps) => {
  const playlist = state.playlists.find(playlist => playlist.id === ownProps.match.params.playlistId)
  if (playlist) {
    return { playlist: {
      id: playlist.id,
      name: playlist.attributes.name,
      description: playlist.attributes.description,
      tracks: playlist.attributes.tracks
    } }
  } else {
    return { playlist: {} }
  }
};


export default connect(mapStateToProps)(PlaylistComponent);
