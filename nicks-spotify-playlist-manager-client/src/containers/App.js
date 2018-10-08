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

//const API_URL = process.env.REACT_APP_API_URL;

const App = (props) =>
  <Router>
    <div>
      <NavBar />
    </div>
    <div>
      <Route exact path = "/playlists" component={Playlists} />
    </div>
  </Router>

export default App;
