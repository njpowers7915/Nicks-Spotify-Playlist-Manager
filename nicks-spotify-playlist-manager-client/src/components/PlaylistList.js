import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { fetchPlaylists } from '../actions/PlaylistsActions';

const PlaylistList = ({playlists}) => {
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


/*
class PlaylistList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: []
    }
  }

  renderPlaylists() {
    return this.props.playlists.map(playlist =>
      <li key={playlist.id}>
        <Link style={{marginRight: '12px'}}
          key={playlist.id}
          to={`/playlists/${playlist.id}`} >{playlist.attributes.name}</Link>
      </li>
    );
  }


  render() {
    return (
      <div className="playlist-list">
        <Link to="/playlists/new">Create a new Playlist!</Link>
        <h3>Playlists</h3>
          <ul>
            {this.renderPlaylists()}
          </ul>
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
*/
