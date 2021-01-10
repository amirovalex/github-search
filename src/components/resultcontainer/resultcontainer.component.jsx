import React from 'react';
import { Container, UserImage, UserEmail, 
		 UserDescription, UserName } from './resultcontainer.styles.js';
import { connect } from 'react-redux';
import { selectUser } from '../../redux/search/search.actions.js';

const mapDispatchToProps = dispatch => ({
	selectUser:(user) => dispatch(selectUser(user))
})

export const ResultContainer = ({imgSrc,userEmail,userName,userDescription,user,selectUser}) => {
	return(
		<Container onClick={() => selectUser(user)}>
			<UserImage src={imgSrc}/>
			<UserName>{userName}
			</UserName>
			<UserEmail>{userEmail}
			</UserEmail>
			<UserDescription>{userDescription}
			</UserDescription>
		</Container>
	)
}

export default connect(null,mapDispatchToProps)(ResultContainer);