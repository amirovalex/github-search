import styled from 'styled-components';

export const NavbarContainer = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	background-color:rgba(255,255,255,0.9);
	background-color: black;
	position:fixed;
	width:100%;
	z-index:2;
	box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.25);
`

export const LogoImage = styled.img`
	width:6vw;
	max-width:60px;
`

export const LogoText = styled.p`
	font-size:20px;
	font-weight:bold;
	color:white;
	margin-left:5px;
`

export const LogoContainer = styled.div`
	display:flex;
	align-items:center;
	cursor:pointer;
	margin-left:5px;
`