import React from 'react';
//import { connect } from 'react-redux'

const TrackComponent = ({track}) =>
  <div key={track.id} className="TrackComponent">
    <li>{track.name} -- {track.artist}</li>
  </div>;

export default TrackComponent;
