let Utils = {
	focusParams: function(obj) {
		let newObj = {};

		Object.keys(obj).forEach((key) => {
			newObj[`data-focus-${key}`] = obj[key];
		});

		return newObj;
	},

	responseStatus: function(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return Promise.resolve(response)
	  } else {
	    return Promise.reject(new Error(response.statusText))
	  }
  },

	responseJson: function(response) {
	  return response.json();
	}
};

export default Utils;
