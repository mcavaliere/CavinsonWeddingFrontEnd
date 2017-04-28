import {combineReducers} from 'redux';
import messages from './messageReducer';
import rsvps from './rsvpReducer';

const rootReducer = combineReducers({
	messages,
	rsvps
});

export default rootReducer;
