import React from 'react';
import { Button } from './searchbutton.styles.js';
import { connect } from 'react-redux';
import { fetchUsersStartAsync, fetchUsersStart } from '../../redux/search/search.actions.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return  {
    searchUser:state.searchUser.searchField,
    pageNumber:state.searchUser.page,
  }
}

const mapDispatchToProps = dispatch => ({
	fetchUsersStartAsync:(searchUser,pageNumber,fetching) => dispatch(fetchUsersStartAsync(searchUser,pageNumber,fetching)),
	fetchUsersStart:() => dispatch(fetchUsersStart())
})

export const SearchButton = ({fetchUsersStartAsync,searchUser,pageNumber, history,match,fetchUsersStart}) => {
	return(<Button onClick={() => {
				match.url === "/" ? fetchUsersStartAsync(searchUser,1,"fetching initial") : fetchUsersStartAsync(searchUser,1,"fetching")
				history.push(`/results`)
				}
			}>Search</Button>)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchButton));