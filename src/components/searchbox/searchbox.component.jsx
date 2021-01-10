import React from 'react';
import { SearchInput } from './searchbox.styles.js';
import { connect } from 'react-redux';
import { changeSearchField } from '../../redux/search/search.actions.js';
import { withRouter } from 'react-router-dom';
import { fetchUsersStartAsync } from '../../redux/search/search.actions.js';

const SearchBox = (props) =>  {
	return(
		<SearchInput type="text" value={props.searchUser} placeholder="Search user" 
		onKeyPress={(event) => {
			if (event.key === "Enter") {
			if (props.match.url === "/") {
				props.fetchUsersStartAsync(props.searchUser,1,"fetching initial")
				props.history.push('/results')
			}
			else {
				props.fetchUsersStartAsync(props.searchUser,1,"fetching")
			}
			}
		}
		}
		onChange={(event) => props.changeSearchField(event.target.value)} />
	)
}

const mapDispatchToProps = dispatch => ({
    changeSearchField:(value) => dispatch(changeSearchField(value)),
    fetchUsersStartAsync:(searchUser,pageNumber,fetching) => dispatch(fetchUsersStartAsync(searchUser,pageNumber,fetching))
})

const mapStateToProps = state => {
  return  {
    searchUser:state.searchUser.searchField,
    pageNumber:state.searchUser.pageNumber
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchBox));