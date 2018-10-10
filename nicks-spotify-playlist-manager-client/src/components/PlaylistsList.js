//import React from 'react';
//import { Link } from 'react-router-dom';
/*
const PlaylistsList = ({ playlists }) => {
  debugger
  const renderPlaylists = playlists.map(playlist =>
    <Link style={{ marginRight: '12px' }} key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
  );

  return (
    <div>
      {renderPlaylists}
    </div>
  );
};

export default PlaylistsList;
*/

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/PlaylistsActions';

class PlaylistsList extends Component {

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render () {

    const renderPlaylists = this.props.playlists.map(playlist =>
        <li key={playlist.id}>
          <Link to={`/playlists/${playlist.id}`} playlist={playlist} >{playlist.attributes.name}</Link>
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

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(PlaylistsList);
