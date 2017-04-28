import Constants from '../lib/Constants';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

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
		.then(status)
	    .then(json)
	    .catch(function(error) {
			return Promise.reject(new Error(error))
	    });

	}
}

export default Api;
