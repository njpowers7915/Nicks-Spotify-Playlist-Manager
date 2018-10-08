import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistsList = ({ playlists }) => {
  debugger
  //let playlist_data = playlists.data
  const renderPlaylists = playlists.map(playlist =>
    <ul>
      <li>
        <Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.attributes.name}</Link>
      </li>
    </ul>
  );

  return (
    <div>
      {renderPlaylists}
    </div>
  );
};

export default PlaylistsList;
