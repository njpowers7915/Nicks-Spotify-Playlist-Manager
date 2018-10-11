import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>
  <div className="NavBar">
    <h3>Welcome user! -- <Link to="/playlists">Home</Link> -- Sign Out</h3>

    {/* {<NavLink to="/" exact style={link}
      activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link}
      activeStyle={{background: 'darkblue'}}>Logout</NavLink> */}
  </div>;

export default NavBar
