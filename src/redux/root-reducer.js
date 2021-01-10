import { combineReducers } from 'redux';
import { searchUsersReducer } from './search/search.reducer.js';

const rootReducer = combineReducers({
	searchUser:searchUsersReducer
})
export default rootReducer;