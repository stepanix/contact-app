import { combineReducers } from 'redux';
import { contactReducer } from './ContactReducer';

const rootReducer = combineReducers({
	contacts: contactReducer
});

export default rootReducer;