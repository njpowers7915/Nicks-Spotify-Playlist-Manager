import React from 'react';
import { Link } from 'react-router-dom';

/* Add basic styling for NavLinks
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
} */
/*
<div className="NavBar" style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
  <NavLink style={{ marginRight: '10px' }} to="/pets">See All The Pets!</NavLink>
  <NavLink style={{ marginRight: '10px' }} to="/pets/new">Add A Pet</NavLink>
</div>
*/

const NavBar = () =>
  <div>
    <h3>Welcome user! -- <Link to="/playlists">Home</Link> -- Sign Out</h3>

    {/* {<NavLink to="/" exact style={link}
      activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link}
      activeStyle={{background: 'darkblue'}}>Logout</NavLink> */}
  </div>;

export default NavBar
