import {combineReducers} from 'redux';
import pages from './pageReducer';

const rootReducer = combineReducers({
	pages
});

export default rootReducer;
