import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Reducer returns an altered copy of the previous state,
//   and NEVER alters existing state directly.
export default function messageReducer(state = initialState.messages, action) {
	switch (action.type) {
		case types.LOAD_MESSAGES_SUCCESS:
			return action.messages;
		default:
			return state;
	}
};
