import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { PropTypes } from 'prop-types';

//import { updatePlaylistFromData } from '../actions/playlistFormActions'
import { createPlaylist } from '../actions/PlaylistsActions'

class NewPlaylistForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { createPlaylist, history } = this.props
    createPlaylist(this.state)
    history.push('/playlists')
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return(
      <div>
        <h3>Create New Playlist!</h3>
        <form onSubmit={this.handleOnSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="description"
              value={this.state.description}
            />
          </div>
          <button type="submit">Create Playlist</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPlaylist })(NewPlaylistForm)
