import Constants from '../lib/Constants';

class Api {
	static create() {
		return fetch(Constants.API_BASE_URL + '/rsvps', {
			method: 'POST',
			headers: Constants.DEFAULT_JSON_HEADERS,
			mode: 'cors'
		}).
		then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default Api;
