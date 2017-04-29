import * as types from './actionTypes';
import rsvpsApi from '../api/rsvpsApi';

export function create(rsvp) {
	return function(dispatch) {
		dispatch(createRequest(rsvp));

		return rsvpsApi.create(rsvp).then(response => {
			if (response.status === 200) {
				response.json().then(rsvp => {
					dispatch(createSuccess(rsvp));
				})
			} else {
				response.json().then(errors => {
					dispatch(createFailure(rsvp, errors));
				})
			}
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
