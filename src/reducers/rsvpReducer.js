import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function rsvpReducer(state = initialState.rsvps, action) {
		switch (action.type) {
			case types.REQUEST_CREATE_RSVP:
				var newState = Object.assign({}, state);
				newState.createInProgress = true;
				newState.current = action.rsvp;
				return newState;

			case types.CREATE_RSVP_SUCCESS:
				var newState = Object.assign({}, state);
				newState.lastCreated = action.rsvp;
				newState.lastCreatedStatus = "success";
				return newState;

			case types.CREATE_RSVP_FAILURE:
				var newState = Object.assign({}, state);
				newState.lastCreated = null;
				newState.lastCreatedStatus = "failure";
				newState.fieldErrors = action.error;
				newState.error = "There was an error processing your RSVP. Please check your the information you entered and try again. "
				return newState;

			case types.CREATE_RSVP_SERVER_ERROR:
				var newState = Object.assign({}, state);
				newState.lastCreated = null;
				newState.lastCreatedStatus = "failure";
				newState.error = "A system error occured. Try back later, or tell Mike to fix it!";
				// newState.error = action.error.error;
				return newState;

			default:
				return state;
		}
}
