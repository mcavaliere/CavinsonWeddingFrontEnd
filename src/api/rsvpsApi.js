import Constants from '../lib/Constants';
import Utils from '../lib/Utils';

class Api {
	static create(rsvp) {
		return fetch(Constants.API_BASE_URL + '/rsvps', {
			method: 'POST',
			headers: Constants.DEFAULT_JSON_HEADERS,
			mode: 'cors',
			body: JSON.stringify({
				'rsvp': rsvp
			})
		})
	}
}

export default Api;
