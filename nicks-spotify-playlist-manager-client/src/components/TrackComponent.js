import React from 'react';
import { connect } from 'react-redux'

const TrackComponent = ({track}) =>
  <div key={track.id} className="PlaylistComponent">
    <li>{track.name} -- {track.artist}</li>
  </div>;

/*
  const mapTrackToProps = (state, ownProps) => {
    const track = state.tracks.find(playlist => playlist.id === ownProps.match.params.playlistId)
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
*/

  export default TrackComponent;
