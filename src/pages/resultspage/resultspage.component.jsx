import React from 'react';
import ResultContainer from '../../components/resultcontainer/resultcontainer.component.jsx';
import { connect } from 'react-redux';
import { ResultsList, ResultsNumber, ResultsPageContainer,
		 LoadingOverlay, GlobalCssOnFetch } from './resultspage.styles.js';
import { UserInfo } from '../../components/userinfo/userinfo.component.jsx';
import { withRouter } from 'react-router-dom';
import SearchControl from '../../components/searchcontrol/searchcontrol.component.jsx';

const mapStateToProps = state => {
	return{
		users:state.searchUser.users,
		isFetching:state.searchUser.isFetching,
		selectedUser:state.searchUser.selectedUser,
		totalPages:state.searchUser.totalPages,
		page:state.searchUser.page,
		totalResults:state.searchUser.totalResults
	}
}


export const ResultsPage = ({users,selectedUser,totalPages,match,isFetching,totalResults}) => {
	return(
		<ResultsPageContainer fetching={users === "fetching" ? users : null}>
		<GlobalCssOnFetch fetching={isFetching ? true : false}/>
		<UserInfo selectedUser={selectedUser}/>
		<ResultsNumber>{`${totalResults} users found`}</ResultsNumber>
		<SearchControl/>
		<ResultsList fetching={users === "fetching" ? users : null}>
		{users === "fetching" ? null : users.modifiedUsersPage.map((user,i) => {
			return(
					<ResultContainer 
					key={i}
					imgSrc={user.data.avatar_url}
					userEmail={user.data.email}
					userDescription={user.data.bio}
					userName={user.data.name}
					user={user}
					/>
				)
				}
		)}
		</ResultsList>
		{users === "fetching" ? <LoadingOverlay>Loading Users</LoadingOverlay> : null}
		</ResultsPageContainer>
	)
}


export default withRouter(connect(mapStateToProps)(ResultsPage));