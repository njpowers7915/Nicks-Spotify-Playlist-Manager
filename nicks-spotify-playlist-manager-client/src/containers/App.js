import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/*
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
*/

import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'
import WelcomePage from './WelcomePage'

//const API_URL = process.env.REACT_APP_API_URL;

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

/*
const App = (props) =>
  <Router>
    <div>
      <NavBar />
      <Link to="/playlists/new">Create a new Playlist!</Link>
      <Route path="/playlists" component={Playlists} />
    </div>
  </Router>

export default App;
*/
