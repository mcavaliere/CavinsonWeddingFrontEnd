import Constants from '../lib/Constants';

const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
};

class Api {
	static all() {
		return fetch(Constants.API_BASE_URL + '/messages', {
			method: 'GET',
			headers: DEFAULT_HEADERS,
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
			headers: DEFAULT_HEADERS,
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
			headers: DEFAULT_HEADERS
		}).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});

	}
}

export default Api;
