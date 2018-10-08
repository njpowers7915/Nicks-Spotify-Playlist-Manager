import React, {Component} from 'react';
import { connect } from 'react-redux';

import PlaylistComponent from '../components/PlaylistComponent';
import NewPlaylistForm from '../components/NewPlaylistForm'
import { fetchPlaylists } from '../actions/PlaylistsActions'

//import {Route, Switch} from 'react-router-dom';
/*
class Playlists extends Component {

  render() {
    return(
      <div className="PlaylistComponent">
        <h1>Playlists</h1>
        <NewPlaylistForm />
        {this.props.playlists.map(playlist => <PlaylistComponent key={playlist.id} playlist={playlist} />)}
      </div>
    )
  }
}

export default Playlists;
*/


class Playlists extends Component {


  componentDidMount() {
    debugger
    this.props.fetchPlaylists()
  }

  const renderPlaylists = () => {
    this.props.playlists.map(playlist =>
      <Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
    )
  }

  render() {
    debugger
    return(
      <div className="PlaylistsContainer">
        <h1>Playlists</h1>
        {/*{this.props.playlists.map(playlist => <PlaylistComponent key={playlist.id} playlist={playlist} />)} */}
        {renderPlaylists}
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
