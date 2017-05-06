export default {
	messages: [],

	lastLocation: null,
	
	rsvps: {
		// The last created RSVP object.
		lastCreated: null,

		// Status of the last create attempt. "success" or "failure."
		lastCreatedStatus: null,

		// Current RSVP object.
		current: null,

		// Flag for create requests in progress.
		createInProgress: false,

		fieldErrors: {}
	}
};
