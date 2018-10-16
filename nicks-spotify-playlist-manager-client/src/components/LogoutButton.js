import React from 'react';


const LogoutButton = ({ handleLogout }) =>
  <div className="LogoutButton">
    <button onClick={() => handleLogout(this.state)}>Logout</button>
  </div>

export default LogoutButton
