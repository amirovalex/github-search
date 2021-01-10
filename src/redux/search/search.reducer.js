import { CHANGE_SEARCHFIELD, CHANGE_PAGE, SET_TOTAL_PAGES,
		 FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
		 SELECT_USER, SET_TOTAL_RESULTS, RESET_STATE } from './search.constants.js';

const initialState = {
	searchField:'',
	users:null,
	isFetching:false,
	isFetchingError:null,
	page:1,
	totalPages:null,
	selectedUser:null,
	totalResults:null
}

export const searchUsersReducer = (state=initialState,action={}) => {
	switch (action.type) {
		case CHANGE_SEARCHFIELD:
			return {...state,searchField:action.payload}
		case FETCH_USERS_START:
			return {...state,isFetching:true,users:action.payload}
		case FETCH_USERS_SUCCESS:
			return {...state,isFetching:false,
					users:action.payload
					}
		case FETCH_USERS_FAILURE:
			return {...state,isFetchingError:action.payload, ...initialState}
		case CHANGE_PAGE:
			return {...state,page:action.payload}
		case SET_TOTAL_PAGES:
			return {...state,totalPages:action.payload}
		case SELECT_USER:
			return {...state,selectedUser:action.payload}
		case SET_TOTAL_RESULTS:
			return {...state,totalResults:action.payload}
		case RESET_STATE:
			return {...initialState}
		default:
			return state;
	}
}