import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Reducer returns an altered copy of the previous state,
//   and NEVER alters existing state directly.
export default function pageReducer(state = initialState.pages, action) {
	switch (action.type) {
		case types.LOAD_PAGES_SUCCESS:
			return action.pages;
		default:
			return state;
	}
};
