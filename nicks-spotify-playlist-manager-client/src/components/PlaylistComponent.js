import React from 'react';
import { connect } from 'react-redux'
import TracksList from './TracksList'

const PlaylistComponent = ({playlist}) =>
  <div key={playlist.id} className="PlaylistComponent">
    <h3>{playlist.name}</h3>
    <p>Description: {playlist.description}</p>
    <TracksList tracks={playlist.tracks} />
  </div>;


const mapStateToProps = (state, ownProps) => {
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
