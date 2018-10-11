import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Signup from "./SignupForm"
import Login from "./LoginForm"

class WelcomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="WelcomePage">
        <h2>Welcome to Nicks Spotify Playlist Manager</h2>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Link to="/signup">Signup!</Link>
        <Link to="/login">Login!</Link>
      </div>
    )
  }




}
export default WelcomePage
