import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Reducer returns an altered copy of the previous state,
//   and NEVER alters existing state directly.
export default function locationReducer(state = initialState.lastLocation, action) {
	switch (action.type) {
		case types.STORE_LAST_LOCATION:
			return action.messages;
		case types.RESET_LAST_LOCATION:
			return null;
		default:
			return state;
	}
};
