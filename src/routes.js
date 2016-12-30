import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import LocationPage from './components/LocationPage';
import NoMatchPage from './components/NoMatchPage';
import PagesIndexPage from './components/pages/Index';
import NewPage from './components/pages/New';

import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default (
	<Route path="/" component={App}>
	  <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage}/>
	  <Route path="location" component={LocationPage}/>
	  <Route path="/pages">
	  	<IndexRoute component={PagesIndexPage} />
	  	<Route path="/pages/new" component={NewPage} />
	  </Route>
      <Route path="*" component={NoMatchPage}/>
    </Route>
);
