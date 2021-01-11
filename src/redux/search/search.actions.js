import { CHANGE_SEARCHFIELD, FETCH_USERS_START,
		 FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, CHANGE_PAGE,
		 SET_TOTAL_PAGES, SELECT_USER, SET_TOTAL_RESULTS,
		 RESET_STATE } from './search.constants.js';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({
	auth:process.env.KEY
})

export const changePage = (number) => ({
	type:CHANGE_PAGE,
	payload:number
})

export const changeSearchField = (text) => ({
	type:CHANGE_SEARCHFIELD,
	payload:text
})

export const fetchUsersStart = (text) => ({
	type:FETCH_USERS_START,
	payload:text
})

export const fetchUsersSuccess = (users) => ({
	type:FETCH_USERS_SUCCESS,
	payload:users
})

export const fetchUsersFailure = (err) => ({
	type:FETCH_USERS_FAILURE,
	payload:err
})

export const setTotalResults = (results) => ({
	type:SET_TOTAL_RESULTS,
	payload:results
})


export const fetchUsersStartAsync = (searchUser,pageNumber,fetching) => {
	console.log(fetching)
	return async dispatch => {
		try{
		dispatch( fetching ? fetchUsersStart(fetching) : fetchUsersStart("fetching"))
		dispatch(changePage(pageNumber))
		const searchResult = await octokit.request('GET /search/users', {
			q:`${searchUser}`,
			page:pageNumber,
			per_page:40
		})
		const modifiedUsersPromise = []
		await searchResult.data.items.map((user,i) => {
			const dataResult = new Promise(async (res,rej) => {
				const userInfo = await octokit.request('GET /users/{username}', {
				username: user.login
				})
				res(userInfo)
			})
			modifiedUsersPromise.push(dataResult)
			return dataResult
		})	
		const modifiedUsers = await Promise.all(modifiedUsersPromise)
		const fullUsersInfo = {
			modifiedUsersPage:modifiedUsers,
			searchResult
		}
		const totalPages = Math.ceil(searchResult.data.total_count / 40)
		dispatch(setTotalResults(searchResult.data.total_count))
		dispatch(setTotalPages(totalPages > 25 ? 25 : totalPages))
		dispatch(fetchUsersSuccess(fullUsersInfo))
		}
		catch(error) {
			console.log(error)
			dispatch(fetchUsersFailure(error.message))
		}
	}
}

export const setTotalPages = (number) => ({
	type:SET_TOTAL_PAGES,
	payload:number
})

export const selectUser = (user) => ({
	type:SELECT_USER,
	payload:user
})

export const resetState = () => ({
	type:RESET_STATE
})
