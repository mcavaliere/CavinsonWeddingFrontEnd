import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './components/App';
import AuthService from './lib/AuthService';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import LocationPage from './components/LocationPage';
import EmptyPage from './components/EmptyPage';
import NoMatchPage from './components/NoMatchPage';
import GuestbookIndexPage from './components/guestbook/Index';
import NewMessagePage from './components/guestbook/New';
import ShowMessagePage from './components/guestbook/Show';
import LoginPage from './components/Login';
import LoginCallback from './components/LoginCallback'


import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import GlobalStyles from './scss/main.scss'

const auth = new AuthService('ulMlpEBwqkyZvHH5j1R2vvmCaacddBos', 'mcavaliere.auth0.com');

var lastLocation = null;

function saveLocation(location) {
	lastLocation = location;
}


/**
 * Validate authentication for priavte routes
 */
const requireAuth = (nextState, replace) => {
	if (!auth.loggedIn()) {
		// saveLocation(nextState.location.pathname);
		// replace({
		// 	pathnamne: '/login',
		// 	state: nextState.location.pathname
		// });
		replace('/login')


	}
}

const handleCallback = () => {
	console.warn("handleCallback");
}

export const makeMainRoutes = () => {
	console.warn("auth inside makeMainRoutes: ", auth);
	return (
		<Route path="/" component={App}>
		  <IndexRoute component={HomePage} />
	      <Route path="about" component={AboutPage}/>
		  <Route path="location" component={LocationPage}/>
		  <Route path="/guestbook" auth={auth}>
		  	<IndexRoute component={GuestbookIndexPage} />
		  	<Route path="/guestbook/new" component={NewMessagePage} />
			<Route path="/guestbook/:messageId" component={ShowMessagePage} />
		  </Route>
		  <Route path="login" component={LoginPage} auth={auth} />
		  <Route path="login/callback" component={LoginCallback} onEnter={handleCallback} />
		  <Route path="checkme" component={EmptyPage} auth={auth} />
	      <Route path="*" component={NoMatchPage} />
	    </Route>
	);
}

export default makeMainRoutes;
