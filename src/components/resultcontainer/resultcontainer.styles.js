import styled from 'styled-components';

export const Container = styled.div`
	display:grid;
	grid-template-columns: auto 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	border: 1px solid black;
	margin: 10px;
	align-items:center;
	align-content:center;
	justify-content:center;
	border-radius:5px;
	text-align:center;
	font-size: max(2vw,15px);
	background:black;
	color:white;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	cursor:pointer;
	&:hover {
		background: rgba(0,0,0,0.9)
	}
`

export const UserImage = styled.img`
	grid-row: 1/3;
	width:max(10vw,90px);
	margin-left:max(1vw,5px);
	border-radius:100%;
`

export const UserName = styled.p`
	padding-left: 5px;
    padding-right: 5px;
    white-space: nowrap;
    overflow: hidden;
	text-overflow: ellipsis;
`

export const UserEmail = styled.p`
	padding-left: 5px;
    padding-right: 5px;
    white-space: nowrap;
    overflow: hidden;
	text-overflow: ellipsis;
`

export const UserDescription = styled.p`
	grid-column: 2/4;
	white-space: nowrap;
    overflow: hidden;
	text-overflow: ellipsis;
	padding-left: 5px;
    padding-right: 5px;
`