import React from 'react';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { fetchTracks } from '../actions/TracksActions';
import TrackComponent from './TrackComponent'

const TracksList = (props) =>
/*  this.props.tracks.map(track => <TrackComponent track={track} />);
    render() {
      return ( */
        <div id="TracksList">
          {this.props.tracks}
        </div>
/*      )
}   */
/*
  } else {
    return (
      <div id="TracksList">
        <h3>Playlist is Empty</h3>
      </div>
    )
  }
}
*/
/*
    debugger
    return(
      <div>
        {trackComponents}
      </div>
    )
  }
}
*/
//const mapStateToProps = state => {
//  return {
//    playlists: state.playlists
//  }
//}
export default TracksList
//export default connect(mapStateToProps, { fetchPlaylists })(PlaylistsList);
