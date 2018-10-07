import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {


componentDidMount() {
  fetch(`${API_URL}/playlists`)
    .then(response => response.json())
    .then(playlists => this.setState({ playlists }))
}

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
