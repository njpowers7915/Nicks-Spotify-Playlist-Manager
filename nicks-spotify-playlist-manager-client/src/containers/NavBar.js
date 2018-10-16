import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton'

const NavBar = ({handleLogout}) =>
  <div className="NavBar">
    <h3>Welcome user! -- <Link to="/playlists">Home</Link> -- <LogoutButton handleLogout={handleLogout} /></h3>

    {/* {<NavLink to="/" exact style={link}
      activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link}
      activeStyle={{background: 'darkblue'}}>Logout</NavLink> */}
  </div>;

export default NavBar
