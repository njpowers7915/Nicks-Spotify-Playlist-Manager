import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/PlaylistsActions';

class PlaylistList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistListLoaded: false
    }
  }
/*
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
*/
  componentDidMount() {
    this.props.fetchPlaylists()
  }


  renderPlaylists() {
    return this.props.playlists.map(playlist =>
      <li key={playlist.id}>
        <Link to={`/playlists/${playlist.id}`} playlist={playlist} >{playlist.attributes.name}</Link>
      </li>
    );

  }
/*
  const renderPlaylists() {
    return this.props.playlists.map(playlist =>
      <li key={playlist.id}>
        <Link to={`/playlists/${playlist.id}`} playlist={playlist} >{playlist.attributes.name}</Link>
      </li>
    );
    this.setState {
      playlistListLoaded: true
  }
*/


  render() {
    return (
      <div className="playlist-list">
        {this.renderPlaylists()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlists: state.playlists

  }
}

export default connect(mapStateToProps, { fetchPlaylists })(PlaylistList)

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
