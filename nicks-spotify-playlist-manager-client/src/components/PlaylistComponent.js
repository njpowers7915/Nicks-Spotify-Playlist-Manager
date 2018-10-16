import React from 'react';
import { connect } from 'react-redux'
import { fetchPlaylist } from '../actions/PlaylistsActions';

import TracksList from './TracksList'

class PlaylistComponent extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId)
  }

  render() {

    //const user_playlist = this.props.playlists.find(playlist => playlist.id === this.props.match.params.playlistId)
    debugger
    return(
      <div key={this.props.playlist} className="PlaylistComponent">
        <h3>{this.props.playlist.name}</h3>
        <p>Description: {this.props.playlist.description}</p>
        <TracksList tracks={this.props.playlist.tracks} />
      </div>

    )
  }
}

const mapStateToProps = state => {
  debugger
  return { playlist: state.playlists.attributes }
}

export default connect(mapStateToProps, {fetchPlaylist})(PlaylistComponent)

/*
const PlaylistComponent = ({playlist}) =>
  <div key={playlist.id} className="PlaylistComponent">
    <h3>{playlist.name}</h3>
    <p>Description: {playlist.description}</p>
    <TracksList tracks={playlist.tracks} />
  </div>;


const mapStateToProps = (state, ownProps) => {
  debugger
  const playlist = state.playlists.find(playlist => playlist.id === ownProps.match.params.playlistId)
  if (playlist) {
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
*/
