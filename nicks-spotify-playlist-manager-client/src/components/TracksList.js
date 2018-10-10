import React from 'react';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { fetchTracks } from '../actions/TracksActions';
import TrackComponent from './TrackComponent'

class TracksList extends React.Component {

  render (this.props) {
    function tracks(props) {
      if (this.props.tracks.length > 0) {
        const tracks = props.tracks.map(track =>
          <li>{track.name} -- {track.artist}</li>)
        return (
            <div id="TracksList">
              {tracks}
            </div>
          )
      } else {
        return (
          <div id="TracksList">
            <h3>Playlist is Empty</h3>
          </div>
        )
      }
    }

    return(
      <div>
        {tracks(this.props)}
      </div>
    )
  }
}

//const mapStateToProps = state => {
//  return {
//    playlists: state.playlists
//  }
//}
export default TracksList
//export default connect(mapStateToProps, { fetchPlaylists })(PlaylistsList);
