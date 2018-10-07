import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { PropTypes } from 'prop-types';
//import { Link } from 'react-router-dom';

import { updatePlaylistFromData } from '../actions/newPlaylistActions'
import { createPlaylist } from '../actions/PlaylistsActions'

class NewPlaylistForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlaylistFormData = Object.assign({}, this.props.playlistFormData, {
      [name]: value
    })
    this.props.updatePlaylistFromData(currentPlaylistFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createPlaylist(this.props.playlistFormData)
  }

  render() {
    const { name, description } = this.props.playlistFormData;


  render() {
    return(
      <div>
        Create New Playlist!
        <form onSubmit={this.handleOnSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="description"
              value={description}
            />
          </div>

          <button type="submit">Add Board</button>
        </form>
      </div>
    )  
  }
}

export default NewPlaylistForm
