import React from 'react';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { fetchTracks } from '../actions/TracksActions';
import TrackComponent from './TrackComponent'
/*
const TracksList = ({ tracks }) => {
  const trackComponents = this.tracks.map(track => <TrackComponent track={track} key={track.id} />)

  return (
    <div className="TracksList">
      <h3>Songs</h3>
        <ul>
        {trackComponents}
        </ul>
    </div>
  )
}

export default TracksList;
*/

class TracksList extends React.Component {
  //constructor(props) {
  //  super(props)
  //  this.state = {
  //    tracks: this.props.tracks
  //  }
  //}

  //componentDidMount() {
  //  this.props.fetchTracks()
  //}

  //const renderTracks = this.props.tracks.map(track =>
  //    <li key={track.id}>
  //      <TrackComponent track={track} />
  //    </li>
  //);


  render () {

    const renderTracks = this.props.tracks.map(track =>
      <li key={track.id}>
        <TrackComponent track={track} />
      </li>
    )

    return (
      <div className="TracksList">
        <h3>Songs</h3>
          <ul>
          {renderTracks}
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
