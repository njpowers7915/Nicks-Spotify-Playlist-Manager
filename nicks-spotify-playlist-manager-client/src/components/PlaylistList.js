import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/PlaylistsActions';

class PlaylistList extends Component {
  constructor() {
    super();

    this.state = {
      playlistList: [],
      playlistListLoaded: false
    }
  }

  componentDidMount() {
    fetch('/playlists')
      .then(response => response.json())
      .then(response => {
        this.setState({
          playlistList: response.playlists,
          playlistListLoaded: true
      }).catch(error => console.log(error))
    })
  }


  renderPlaylists() {
    return this.state.playlistList.map(playlist =>
        <div className="playlist" key={playlist.id}>
          <h3>{playlist.name}</h3>
          <p>{playlist.description}</p>
        </div>
      );
    }
/*
  const renderPlaylists = this.props.playlists.map(playlist =>
      <li key={playlist.id}>
        <Link to={`/playlists/${playlist.id}`} playlist={playlist} >{playlist.attributes.name}</Link>
      </li>
  );
*/


  render() {
    return (
      <div className="playlist-list">
        {(this.state.playlistListLoaded)
        ? this.renderPlaylists()
        : <p>Loading...</p>}
      </div>
    )
  }
}

export default PlaylistList

/*
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
*/
