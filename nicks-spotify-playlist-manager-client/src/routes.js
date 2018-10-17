import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import WelcomeContainer from './containers/WelcomeContainer';
import ProfilePage from './containers/ProfilePage';
import PlaylistComponent from './containers/PlaylistComponent';
import NewPlaylistForm from './components/NewPlaylistForm';
import LoginForm from './components/LoginForm';
import auth from './auth/authenticator';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WelcomeContainer} />
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="/playlists" component={ProfilePage} onEnter={requireAuth}>
      <Route path="/playlists/new" component={NewPlaylistForm} />
      <Route path="/playlists/:id" component={PlaylistComponent} />
    </Route>
  </Route>
);

function requireAuth(nextState, replace) {
  console.log(auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
