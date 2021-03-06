import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux'
import Auth from '../modules/Auth'


import NavBar from './NavBar'
import ProfilePage  from './ProfilePage'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import WelcomeContainer from './WelcomeContainer'

import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
        auth: true
//      auth: Auth.isUserAuthenticated(),
//      shouldGoToProfile: false
    }
//    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
//    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(data) {
    fetch('http://localhost:3001/api/logout', {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(response => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    }).catch(error => console.log(error))
//    this.props.history.push("/")
  }

  render() {
    return(
      <div className="App">
        <div className="navBar">
          <Route path="/"
            render={() => (this.state.auth)
            ? <NavBar handleLogout={this.handleLogout} />
            : null } />
        </div>

        <Route path="/playlists"
          render={() => (this.state.auth)
            ? <Route path="/playlists" component={ProfilePage} />
            : <WelcomeContainer />} />

        <Route exact path="/"
          render={() => (this.state.auth)
            ? <Redirect to="/playlists" />
            : <WelcomeContainer />} />

        <Route exact path="/signup"
          render={() => (this.state.auth)
            ? <Redirect to="/playlists" />
            : <SignupForm handleSignupSubmit={this.handleSignupSubmit} />} />

        <Route exact path="/login"
          render={() => (this.state.auth)
            ? <Redirect to="/playlists" />
            : <LoginForm handleLoginSubmit={this.handleLoginSubmit} />} />

      </div>
      )
    }
  }

export default App

/*
  handleSignupSubmit(event, data) {
      event.preventDefault()
      fetch('http://localhost:3001/api/users', {
        method: 'POST',
        body: JSON.stringify({
          user: data
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => response.json())
        .then(response => {
          Auth.authenticateToken(response.token)
          this.setState({
            auth: Auth.isUserAuthenticated(),
  //          shouldGoToProfile: true
          })
        }).catch(error => console.log(error))
    }

    handleLoginSubmit(event, data) {
      event.preventDefault()
      fetch('http://localhost:3001/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(response => {
          Auth.authenticateToken(response.token)
          this.setState({
            auth: Auth.isUserAuthenticated(),
          })
        }).catch(error => console.log(error))
      }


*/
