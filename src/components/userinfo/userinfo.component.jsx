import React from 'react';
import { connect } from 'react-redux';
import { UserImage, UserName, UserEmail,
		 UserInfoContainer } from './userinfo.style.js';

const mapStateToProps = state => {
	return{
		selectedUser:state.searchUser.selectedUser
	}
}

export const UserInfo = ({selectedUser}) => {
	return(
	<UserInfoContainer>
		<UserImage alt={"logo"} src={selectedUser ? selectedUser.data.avatar_url : "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}/>
		<UserName>{selectedUser ? selectedUser.data.name : "Please select a user"}</UserName>
		<UserEmail>{selectedUser ? selectedUser.data.email : "Please select a user"}</UserEmail>
	</UserInfoContainer>
	)
}

export default connect(mapStateToProps)(UserInfo);