import React from 'react';
import { connect } from 'react-redux'
import TracksList from './TracksList'
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
    <TracksList tracks={playlist.tracks} />
  </div>;


const mapStateToProps = (state, ownProps) => {
  const playlist = state.playlists.find(playlist => playlist.id === ownProps.match.params.playlistId)
  if (playlist) {
    debugger
    return { playlist: {
      id: playlist.id,
      name: playlist.attributes.name,
      description: playlist.attributes.description,
      tracks: playlist.attributes.tracks
    }}
  } else {
    return { playlist: {} }
  }
};


export default connect(mapStateToProps)(PlaylistComponent);
