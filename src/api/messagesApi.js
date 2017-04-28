import Constants from '../lib/Constants';

class Api {
	static all() {
		return fetch(Constants.API_BASE_URL + '/messages', {
			method: 'GET',
			headers: Constants.DEFAULT_JSON_HEADERS,
			mode: 'cors'
		}).
		then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}

	static find(id) {
		return fetch(Constants.API_BASE_URL + '/messages/' + id, {
			method: 'GET',
			headers: Constants.DEFAULT_JSON_HEADERS,
			mode: 'cors'
		}).
		then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}

	static create(message) {
		return fetch(Constants.API_BASE_URL + '/messages', {
			method: 'POST',
			body: JSON.stringify({
				'message': message
			}),
			headers: Constants.DEFAULT_JSON_HEADERS
		}).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}
}

export default Api;
