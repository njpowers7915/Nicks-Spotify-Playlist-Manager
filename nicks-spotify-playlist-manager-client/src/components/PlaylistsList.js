import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistsList = ({ playlists }) => {
  //let playlist_data = playlists.data
  const renderPlaylists = playlists.map(playlist =>
      <li key={playlist.id}>
        <Link to={`/playlists/${playlist.id}`}>{playlist.attributes.name}</Link>
      </li>
  );

  return (
    <div className="playlistList">
      <ul>
      {renderPlaylists}
      </ul>
    </div>
  );
};

export default PlaylistsList;
