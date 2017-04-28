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
				return newState;

			default:
				return state;
		}
}
