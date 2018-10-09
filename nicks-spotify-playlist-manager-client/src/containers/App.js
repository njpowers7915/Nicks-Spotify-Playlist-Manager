import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
/*
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
*/

import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'

//const API_URL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Link to="/playlists/new">Create a new Playlist!</Link>
          <Route path="/playlists" component={Playlists} />
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
