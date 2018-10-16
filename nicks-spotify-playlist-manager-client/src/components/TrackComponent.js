import React from 'react';
//import { connect } from 'react-redux'

const TrackComponent = ({track}) =>
  <div key={track.id} className="TrackComponent">
    {track.name} -- {track.artist}
  </div>;

export default TrackComponent;
