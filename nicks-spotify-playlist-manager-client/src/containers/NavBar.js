import React from 'react';
//import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
} */

const NavBar = () =>
  <div>
    <h3>Welcome user! -- Home -- Sign Out</h3>

    {/* {<NavLink to="/" exact style={link}
      activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link}
      activeStyle={{background: 'darkblue'}}>Logout</NavLink> */}
  </div>;

export default NavBar
