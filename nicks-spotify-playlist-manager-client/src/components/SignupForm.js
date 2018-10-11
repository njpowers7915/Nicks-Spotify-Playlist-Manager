import React, { Component } from 'react';

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
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
      <div className="signupForm">
        <form onSubmit={(event) => this.props.handleSignupSubmit(event, this.state)}>
          <input type="text" name="username" placeholder="username"
            value={this.state.username} onChange={this.handleChange} />
          <input type="password" name="password" placeholder="password"
            value={this.state.password} onChange={this.handleChange} />
          <input type="email" name="email" placeholder="email"
            value={this.state.email} onChange={this.handleChange} />
          <input type="text" name="name" placeholder="name"
            value={this.state.name} onChange={this.handleChange} />
          <input type="submit" value="Register!" />
        </form>
      </div>
    )
  }
}

export default SignupForm
/*
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../actions/sessionActions';

import { Message, Button, Grid, Form, Header } from 'semantic-ui-react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  //componentWillUnmount() {
  //  this.props.actions.clearAuthError();
  //}

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    const { state } = this.props.location;
    const redirect = state ? state.from.pathname : "/"

    event.preventDefault();

    this.props.actions.signUpUser(this.state, this.props.history, redirect);
  }

  render() {
    const { error } = this.props;

    return (
      <Grid
        verticalAlign="middle"
        centered
        style={{
          height: '100%',
          margin: 0,
        }}>
        <Grid.Column width={6}>
          <Header as="h1">Register</Header>

          { error.length > 1 &&
            <Message
              error
              header='Oh no!  Something went wrong!'
              content={error} />
          }

          <Form onChange={(ev) => this.onChange(ev)} >
            <Form.Field>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.email} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password} />
            </Form.Field>
            <Button
              color="blue"
              type="submit"
              onClick={(ev) => this.onSubmit(ev)}>
              Register
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { error: state.session.error };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signup)
);
*/
