import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

export default class AuthService {
	constructor(clientId, domain) {
		// Configure Auth0
		this.lock = new Auth0Lock(clientId, domain, {
			auth: {
				redirectUrl: "http://localhost:3001/login/callback",
				responseType: "token"
			}
		});

		// Add callbackj for lock 'authenticated' event
		this.lock.on("authenticated", this._doAuthentication.bind(this))

		// Bind login functions to keep this context
		this.login = this.login.bind(this);
	}

	_doAuthentication(authResult) {
		// Save the user token
		this.setToken(authResult.idToken);

		// Navigate to the home route
		// browserHistory.replace("/")
	}

	login() {
		// Call the show method to display the widget
		this.lock.show();
	}

	loggedIn() {
		// Checks if there's a saved token, and it's still valid
		return !!this.getToken();
	}

	setToken(idToken) {
		// Save user token to local storage
		localStorage.setItem('id_token', idToken);
	}

	getToken() {
		return localStorage.getItem('id_token');
	}

	logout() {
		localStorage.removeItemn('id_token');
	}

}
