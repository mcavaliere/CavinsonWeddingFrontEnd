import * as types from './actionTypes';
import rsvpsApi from '../api/rsvpsApi';

export function create(rsvp) {
	return function(dispatch) {
		dispatch(createRequest(rsvp));

		return rsvpsApi.create(rsvp).then(rsvp => {
			dispatch(createSuccess(rsvp));
		}).catch(error => {
			dispatch(createFailure(rsvp, error));
		})
	}
}

function createRequest(rsvp) {
	return {
		type: types.REQUEST_CREATE_RSVP,
		rsvp
	}
}

function createSuccess(rsvp) {
	return {
		type: types.CREATE_RSVP_SUCCESS,
		rsvp
	}
}

function createFailure(rsvp, error) {
	return {
		type: types.CREATE_RSVP_FAILURE,
		rsvp,
		error
	}
}
