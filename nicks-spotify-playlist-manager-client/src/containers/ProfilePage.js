import React, {Component} from 'react'

import Auth from '../modules/Auth'
import NewPlaylistForm from '../components/NewPlaylistForm'

class ProfilePage extends Component {
  constructor() {
    super() = {
      playlists: null,
      playlistsLoaded: false
    }
  }

  componentDidMount() {
    this.getUserPlaylists()
  }

  getUserPlaylists() {
    fetch('/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(response => response.json())
      .then(response => {
         this.setState({
           playlists: response.playlists,
           playlistsLoaded: true
         })
      }).catch(error => console.log(error))
  }

  addPlaylist(event, data) {
    fetch('/playlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      },
      body: JSON.stringify({
        playlist: data,
      })
    }).then(response => response.json())
      .then(response => {
        console.log(response)
        this.getUserPlaylists()
      }).catch(error => console.log(error))
  }

  render(){
    return(
      <div className="user-profile">
        <NewPlaylistForm addPlaylist={this.addPlaylist} />
        {(this.state.playlistsLoaded)
          ? this.state.playlists.map(playlist => {
            return <h1 key={playlist.id}>{playlist.name}</h1>
          })
          : <p>Loading...</p>}
      </div>
    )
  }
}

/*
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

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
*/
