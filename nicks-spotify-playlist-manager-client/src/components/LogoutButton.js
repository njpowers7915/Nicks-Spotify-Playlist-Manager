import React from 'react';


const LogoutButton = () =>
  <div className="LogoutButton">
    <button click={() => this.props.handleLogout(this.state)}>Logout</button>
  </div>

export default LogoutButton
