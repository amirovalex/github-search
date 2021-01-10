import React from 'react';
import { NavbarContainer, LogoContainer, LogoImage,
		 LogoText } from './navbar.styles.js';
import logo from './logo white.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetState } from '../../redux/search/search.actions.js';

const mapStateToProps = state => ({
	isFetching:state.searchUser.isFetching
})

const mapDispatchToProps = dispatch => ({
	resetState:()=>dispatch(resetState())
})

export const Navbar = (props) => {
	return (
		<NavbarContainer>
			<LogoContainer onClick={() => {
				if (!props.isFetching) {
					props.history.push('/')
					props.resetState()
				}
			}}> 
				<LogoImage alt="logo" src={logo}/>
				<LogoText>GitSearch</LogoText>
			</LogoContainer>
		</NavbarContainer>
	)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar));