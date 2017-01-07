import * as types from './actionTypes';
import messagesApi from '../api/messagesApi';

export function loadSuccess(pages) {
	return {type: types.LOAD_MESSAGES_SUCCESS, pages};
};

export function createSuccess(page) {
	return {type: types.CREATE_MESSAGE_SUCCESS};
};

// loadPages action creator function.
export default function load() {
	// Note: The dispatch argument here is provided by the thunk plugin.
	return function(dispatch) {
		return messagesApi.all().then(pages => {
			dispatch(loadSuccess(pages));
		}).catch(error => {
			throw(error);
		});
	}
};

export function create(page) {
	return function(dispatch) {
		return messagesApi.create(page).then(page => {
			dispatch(createSuccess(page));
		}).catch(error => {
			throw(error);
		});
	}
}
