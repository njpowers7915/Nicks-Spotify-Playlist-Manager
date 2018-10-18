import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../actions/authActions'
//import LogoutButton from '../components/LogoutButton'

class NavBar extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    const loggedInNav = (
      <nav>
        <Link to="/playlists">Home</Link>
        <button onClick={(e) => this.handleLogout(e)}>Log Out</button>
      </nav>
    )
    return (
      <div>{this.props.isAuthenticated ? loggedInNav : null}</div>
    )
  }
}

export default NavBar = withRouter(connect(null, {logout})(NavBar))
/*
const NavBar = ({handleLogout}) =>
  <div className="NavBar">
    <h3>Welcome user! -- <Link to="/playlists">Home</Link> -- <LogoutButton handleLogout={handleLogout} /></h3>

     {<NavLink to="/" exact style={link}
      activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link}
      activeStyle={{background: 'darkblue'}}>Logout</NavLink>
  </div>;

export default NavBar
*/
