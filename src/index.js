import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import routes from './routes';
import load from './actions/messageActions';
import AppConstants from './lib/Constants'
import ReactGA from 'react-ga';

const store = configureStore();

ReactGA.initialize( AppConstants.GA_TRACKING_ID );

function logPageView() {
	if ( process.env.NODE_ENV === 'production' ) {
		ReactGA.set({ page: window.location.pathname });
	    ReactGA.pageview(window.location.pathname);
	}

	console.warn("process: ", process.env);

}

// store.dispatch(load());

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
	<Provider store={store}>
		<Router history={browserHistory} routes={routes()} onUpdate={logPageView} />
	</Provider>
), document.getElementById("app"))
