import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props){
  super(props)

  this.state = {
    playlists: []
  }
}

componentDidMount() {
  fetch(`${API_URL}/playlists`)
    .then(response => response.json())
    .then(playlists => this.setState({ playlists }))
}

  render() {
    return (
      <div className="App">
        <NavBar />
        <Playlists playlists={this.state.playlists} />
      </div>
    );
  }
}

export default App;
