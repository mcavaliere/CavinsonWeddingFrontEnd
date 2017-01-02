import Constants from '../lib/Constants';

const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
};

class PagesApi {
	static getAllPages() {
		return fetch(Constants.API_BASE_URL + '/pages').
			then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	}

	static createPage(page) {
		return fetch(Constants.API_BASE_URL + '/pages', {
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

export default PagesApi;
