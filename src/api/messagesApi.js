import Constants from '../lib/Constants';

const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
};

class Api {
	static all() {
		return fetch(Constants.API_BASE_URL + '/messages').
			then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	}

	static create(page) {
		return fetch(Constants.API_BASE_URL + '/messages', {
					method: 'POST',
					body: JSON.stringify({
						'page': page
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
