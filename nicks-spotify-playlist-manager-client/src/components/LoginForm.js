import React from 'react';
//import TextInput from './common/TextInput';
//import {connect} from 'react-redux';
//import {withRouter} from 'react-router-dom';

//import { authenticate } from '../actions/authActions';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnLogin = this.handleOnLogin.bind(this)
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnLogin = (event) => {
    event.preventDefault();
    if (this.props.authenticate(this.state)) {
      this.props.history.push('/playlists')
    } else {
      window.alert("Please try again!")
    }
  }

  render() {
    return (
      <div id="loginForm">
        <h3>Log In</h3>
        <form onSubmit={this.handleOnLogin}>
          <input
            name="username"
            placeholder="username"
            type="text"
            value={this.state.username}
            onChange={this.handleOnChange}/>

          <input
            name="password"
            placeholder="username"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleOnChange}/>

          <input
            type="submit"
            value="Login!"
          />
        </form>
      </div>
    );
  }
}
export default LoginForm
//export default LoginForm = withRouter(connect(null, {authenticate})(LoginForm))

/*
import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div className="loginForm">
        <form onSubmit={(event) => this.props.handleLoginSubmit(event, this.state)} >
        <input type="text" name="username" placeholder="username"
          value={this.state.username} onChange={this.handleChange} />
        <input type="password" name="password" placeholder="password"
          value={this.state.password} onChange={this.handleChange} />
        <input type="submit" value="Login!" />
        </form>
      </div>
    )
  }
}

export default LoginForm
*/
