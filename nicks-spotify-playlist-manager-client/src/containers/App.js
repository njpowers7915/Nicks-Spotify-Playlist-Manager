import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from './Register';
import LogIn from './LogIn';
import LogOut from './LogOut';

import './App.css';
import NavBar from './NavBar'
import Playlists  from './Playlists'

const API_URL = process.env.REACT_APP_API_URL;

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
