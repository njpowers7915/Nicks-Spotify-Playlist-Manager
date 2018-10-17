import React, from 'react';
//import TextInput from './common/TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
        }
      }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange(event) {
    onst field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="username"
            label="username"
            value={this.state.credentials.username}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <input
            type="submit"
            value="Login!"
            onClick={this.onSave}/>
            {" "}
        </form>
      </div>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(LoginForm)

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
