import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

import PlaylistComponent from '../components/PlaylistComponent';
import NewPlaylistForm from '../components/NewPlaylistForm'
import PlaylistsList from '../components/PlaylistsList'
import { fetchPlaylists } from '../actions/PlaylistsActions'
//import {connect} from 'react-redux'

class Playlists extends Component {

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    const { match } = this.props;
    return(
      <div className="PlaylistsContainer">
        <Switch>
          <Route exact path={match.url} component={PlaylistsList} />
          <Route exact path={match.url + '/new'} component={NewPlaylistForm} />
          <Route exact path={match.url + '/:playlistId'} component={PlaylistComponent} />
        </Switch>
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
