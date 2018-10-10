import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { fetchTracks } from '../actions/TracksActions';

class TracksList extends Component {

  //componentDidMount() {
  //  this.props.fetchTracks()
  //}

  render () {

    const renderTracks = this.props.tracks.map(track =>
        <li key={track.id}>
          <TrackComponent track={track} />
        </li>
    );


    return (
      <div className="playlistList">
        <Link to="/playlists/new">Create a new Playlist!</Link>
        <h3>Playlists</h3>
          <ul>
          {renderPlaylists}
          </ul>
      </div>
    );
  }
};

//const mapStateToProps = state => {
//  return {
//    playlists: state.playlists
//  }
//}
export default TracksList
//export default connect(mapStateToProps, { fetchPlaylists })(PlaylistsList);
