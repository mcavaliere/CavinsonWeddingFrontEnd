import * as types from './actionTypes';
import pagesApi from '../api/pagesApi';

export function loadPagesSuccess(pages) {
	return {type: types.LOAD_PAGES_SUCCESS, pages};
};

export function createPageSuccess(page) {
	return {type: types.CREATE_PAGE_SUCCESS};
};

// loadPages action creator function.
export default function loadPages() {
	// Note: The dispatch argument here is provided by the thunk plugin.
	return function(dispatch) {
		return pagesApi.getAllPages().then(pages => {
			dispatch(loadPagesSuccess(pages));
		}).catch(error => {
			throw(error);
		});
	}
};

export function createPage(page) {
	return function(dispatch) {
		return pagesApi.createPage(page).then(page => {
			dispatch(createPageSuccess(page));
		}).catch(error => {
			throw(error);
		});
	}
}
