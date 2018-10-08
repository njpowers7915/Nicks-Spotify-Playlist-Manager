import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistsList = ({ playlists }) => {
  const renderPlaylists = playlists.map(playlist =>
    <Link style={{ marginRight: '12px' }} key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
  );

  return (
    <div>
      {renderPlaylists}
    </div>
  );
};

export default PlaylistsList;
