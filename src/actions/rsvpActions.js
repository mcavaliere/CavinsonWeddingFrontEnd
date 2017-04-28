import * as types from './actionTypes';
import rsvpsApi from '../api/rsvpsApi';

export function create(rsvp) {
	return function(dispatch) {
		return rsvpsApi.create(rsvp).then(rsvp => {
			dispatch(createSuccess(rsvp));
		}).catch(error => {
			dispatch(createFailure(rsvp, error));
		})
	}
}

export function createSuccess(rsvp) {
	return {
		type: types.CREATE_RSVP_SUCCESS,
		rsvp
	}
}

export function createFailure(rsvp, error) {
	return {
		type: types.CREATE_RSVP_FAILURE,
		rsvp,
		error
	}
}
