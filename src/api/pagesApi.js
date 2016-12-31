import Constants from '../lib/Constants';

class PagesApi {
	static getAllPages() {
		return fetch(Constants.API_BASE_URL + '/pages').
			then(response => {
				return response.json();
			}).
			catch(error => {
				return error;
			});
	}
}

export default PagesApi;
