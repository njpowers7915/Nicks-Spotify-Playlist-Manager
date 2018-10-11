import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Auth from '../modules/Auth'

import './App.css';
import NavBar from './NavBar'
import PlaylistList  from '../components/PlaylistList'
import WelcomePage from '../components/Home'

class App extends Component {
  constructor() {
    super()

    this.state = {
      auth: Auth.isUserAuthenticated()
    }
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
  }

  handleSignupSubmit(event) {
    event.preventDefault()
  }

  render() {
    return(
      <div className="App">
        <Route exact path="/playlists" render={() =>
        <PlaylistList />} />
        <Route exact path="/signup"
          render={() => <SignupForm handleSignupSubmit />} />
      </div>
    )
  }

/*
class App extends Component {

  componentWillMount() {
    this.props.actions.loadUserPlaylists();
  }

  render() {
    return (
      <div className="App">
        { this.props.loggedIn ? (
          <Route
        )}
        <Switch>
          <Route path ='/' component={WelcomePage} />
          <Route path="/playlists" component={Playlists} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}
*/
