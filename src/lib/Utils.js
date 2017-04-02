let Utils = {
	focusParams: function(obj) {
		let newObj = {};

		Object.keys(obj).forEach((key) => {
			newObj[`data-focus-${key}`] = obj[key];
		});

		return newObj;
	}
};

export default Utils;
