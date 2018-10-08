import React, { Component } from 'react';

/*
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
*/

import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'

//const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {


  render() {
    return (
      <div className="App">
        <NavBar />
        {/*<Route exact path="/playlists" component={Playlists} /> */}
        <Playlists />
      </div>
    );
  }
}

export default App;
