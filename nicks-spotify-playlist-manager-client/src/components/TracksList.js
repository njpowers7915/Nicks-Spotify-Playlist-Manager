import React from 'react';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { fetchTracks } from '../actions/TracksActions';
import TrackComponent from './TrackComponent'

class TracksList extends React.Component {
  constructor() {
    super()
    this.state = {
      tracks: ''
    }
  }

  componentDidMount() {
    this.setState({
      tracks: this.props.tracks
    })
  }

  renderTracks() {
    return this.state.tracks.map(track =>
      <li key={track.id}>
        <TrackComponent track={track} />
      </li>
    )
  }

    render() {
      return(
      this.state.tracks ? <div>
        {this.renderTracks()}
      </div>
      : <div>Loading ...</div>
    )
    }
  }
export default TracksList
/*
const TracksList = ({tracks}) => {
  const renderTracks = tracks.map(track =>
    <li key={track.id}>
      <TrackComponent track={track} />
    </li>
  )
  return (
    <div>
      renderTracks
    </div>
  )
}


const renderPlaylists = playlists.map(playlist =>
  <li key={playlist.id}>
    <Link style={{marginRight: '12px'}}
      key={playlist.id}
      to={`/playlists/${playlist.id}`} >{playlist.attributes.name}</Link>
  </li>
)

return (
  <div>
    {renderPlaylists}
  </div>
)
}

export default PlaylistList;



const renderTracks = tracks.map(track =>
  <li key={track.id}>
    <TrackComponent track={track} />
  </li>
)






class TracksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracksList: this.props.tracks
    }
  }

  componentDidMount() {
    this.setState
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
        {this.renderTracks()}
        TRACK 1
      </div>
    )
  }
}
export default TracksList


  this.props.tracks.map(track => <TrackComponent track={track} />);
    render() {
      return (
      )
}

  } else {
    return (
      <div id="TracksList">
        <h3>Playlist is Empty</h3>
      </div>
    )
  }
}


    debugger
    return(
      <div>
        {trackComponents}
      </div>
    )
  }
}

//const mapStateToProps = state => {
//  return {
//    playlists: state.playlists
//  }
//}

//export default connect(mapStateToProps, { fetchPlaylists })(PlaylistsList);
*/
