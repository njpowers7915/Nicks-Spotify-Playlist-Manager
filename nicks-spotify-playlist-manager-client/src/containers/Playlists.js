import React from 'react';

import PlaylistComponent from '../components/PlaylistComponent';

const Playlists = (props) => {
  return(
  <div className="PlaylistsContainer">
    <h1>Playlists</h1>
    {props.playlists.map(playlist => <PlaylistComponent key={playlist.id} playlist={playlist} />)}
  </div>
  )
}

export default Playlists;

//import { connect } from 'react-redux';


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
}

const mapStateToProps = (state) => {
  return ({
    playlists: state.playlists
  })
}

export default connect(mapStateToProps, { fetchPlaylists })(Playlists); */
