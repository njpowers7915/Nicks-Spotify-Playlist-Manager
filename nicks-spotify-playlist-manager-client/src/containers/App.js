import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Playlists />
      </div>
    );
  }
}

export default App;
