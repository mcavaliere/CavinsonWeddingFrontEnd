import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import routes from './routes';
import load from './actions/messageActions';

const store = configureStore();

// store.dispatch(load());

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
	<Provider store={store}>
		<Router history={browserHistory} routes={routes()} />
	</Provider>
), document.body)
