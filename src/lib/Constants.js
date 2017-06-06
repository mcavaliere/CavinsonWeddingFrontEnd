const AppConstants = {
	API_BASE_URL: process.env.API_HOST,

	GA_TRACKING_ID: "UA-3409001-6",

	NAV_MENU_ITEMS: {
		"#location": "Date & Location",
		"#accommodations": "Accommodations",
		"#welcome-dinner": "Welcome Dinner",
		"#after-party": "After Party",
		"#registry": "Registry",
		"#rsvp": "RSVP"
	},

	DEFAULT_JSON_HEADERS: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
}

export default AppConstants;
