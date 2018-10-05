import React, {Component} from 'react';
import { connect } from 'react-redux';

import PlaylistComponent from '../components/PlaylistComponent';
//import NewPlaylistForm from './NewPlaylistForm';
import {fetchPlaylists} from '../actions/PlaylistsActions';

class Playlists extends Component{

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    return (
      <div className="PlaylistsContainer">
        <h3>Playlists</h3>
        {/*<NewPlaylistForm />*/}
        {this.props.playlists.map(playlist =>
          <PlaylistComponent key={playlist.id} playlist={playlist} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    playlists: state.playlists
  })
}

export default connect(mapStateToProps, { fetchPlaylists })(Playlists)
