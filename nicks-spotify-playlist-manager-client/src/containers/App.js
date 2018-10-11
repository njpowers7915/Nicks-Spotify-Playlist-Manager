import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
/*
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
*/
import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'
import WelcomePage from '../components/Home'

class App extends Component {
  componentWillMount() {
    this.props.actions.loadUserPlaylists();
  }

  render() {
    return (
      <div>
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



/*
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let welcomePage

    if (isLoggedIn) {
      welcomePage = <Playlists />
    } else {
      welcomePage = <WelcomePage />
    }
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/playlists" component={Playlists} />
          <Route exact path="/" component={welcomePage} />
          {welcomePage}
        </div>
      </Router>
    )
  }
}

export default App
*/
