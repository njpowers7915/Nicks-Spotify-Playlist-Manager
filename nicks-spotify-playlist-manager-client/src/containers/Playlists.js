//import React, {Component} from 'react';

const Playlists = (props) => {
  <div>
    <h3>Playlists</h3>
    {props.playlists.map(playlist =>
      <div key={playlist.id} className="playlist_component">
        <h3>{playlist.name}</h3>
      </div>)}
  </div>
}

export default Playlists
