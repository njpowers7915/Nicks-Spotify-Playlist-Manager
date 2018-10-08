import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PlaylistComponent from '../components/PlaylistComponent';
import NewPlaylistForm from '../components/NewPlaylistForm'
import PlaylistsList from '../components/PlaylistsList'
import { fetchPlaylists } from '../actions/PlaylistsActions'

class Playlists extends Component {


  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {

    const { match, playlists } = this.props;
    return(
      <div className="PlaylistsContainer">
      <Router>
        <Switch>
          <Route path={match.url + "/new"} component={NewPlaylistForm} />
          <Route exact path={match.url + "/:playlistId"} component={PlaylistComponent} />
          <Route exact path={match.url} render={() => (
            <h3>Playlists</h3>
          )}/>
        </Switch>
      </Router>
        <PlaylistsList playlists={playlists} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(Playlists);
