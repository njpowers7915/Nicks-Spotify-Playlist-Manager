import React from 'react';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { fetchTracks } from '../actions/TracksActions';
import TrackComponent from './TrackComponent'

class TracksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracksList: this.props.tracks
    }
  }

  renderTracks() {
    return this.state.tracksList.map(track =>
      <li key={track.id}>
        <TrackComponent track={track} />
      </li>
    );
  }

  render() {
    return (
      <div className="playlist-list">
        {this.renderTracks}
      </div>
    )
  }
}
export default TracksList
/*  this.props.tracks.map(track => <TrackComponent track={track} />);
    render() {
      return ( */
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

//export default connect(mapStateToProps, { fetchPlaylists })(PlaylistsList);
