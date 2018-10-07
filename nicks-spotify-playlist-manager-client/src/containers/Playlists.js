import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlaylistComponent from '../components/PlaylistComponent';
import NewPlaylistForm from '../components/NewPlaylistForm'
import { fetchPlaylists } from '../actions/PlaylistsActions'

class Playlists extends Component {


  componentDidMount() {
    debugger
    this.props.fetchPlaylists()
  }

  render() {
    debugger
    return(
      <div className="PlaylistsContainer">
        <h1>Playlists</h1>
        {this.props.playlists.map(playlist => <PlaylistComponent key={playlist.id} playlist={playlist} />)}
        <NewPlaylistForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    playlists: state.playlists
  })
}

export default connect(mapStateToProps, { fetchPlaylists })(Playlists);

//


//import NewPlaylistForm from './NewPlaylistForm';
//import { fetchPlaylists } from '../actions/PlaylistsActions';

/* class Playlists extends Component{

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    return (
      <div className="Playlists">
        <h1>Playlists</h1>
        {this.props.playlists.map(playlist => <PlaylistComponent key={playlist.id} playlist={playlist} />)}
        /*<SurfboardForm />
      </div>
    );
  }
} */
