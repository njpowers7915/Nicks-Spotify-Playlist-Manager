import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/playlists')
      .then(response => response.json())
      .then(playlists => this.setState({playlists}))
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
