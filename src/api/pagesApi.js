class PagesApi {
	static getAllPages() {
		return fetch('http://localhost:3000/pages').
			then(response => {
				return response.json();
			}).
			catch(error => {
				return error;
			});
	}
}

export default PagesApi;
