import styled from 'styled-components';

export const Carousel = styled.div`
	display:flex;
	flex-wrap:nowrap;
	justify-content:space-between;
	border:1px solid black;
	color:white;
	text-align:center;
	${({isFetching}) => isFetching ? 'pointer-events: none;' : null}
	font-size: max(1vw,10px);
`

export const PageTag = styled.div`
	background:${(props) => props.selected ? 'rgba(0,0,0,0.7);' : 'black;'};
	width:100%;
	cursor:pointer;
	&:hover {
		background:rgba(0,0,0,0.7);
	}
`

export const PageNumber = styled.p`
`

export const LeftArrow = styled.i`
	border: solid white;
 	border-width: 0 3px 3px 0;
  	display: inline-block;
  	padding: 3px;
  	transform: rotate(135deg);
  	-webkit-transform: rotate(135deg);
`

export const RightArrow = styled.i`
	border: solid white;
 	border-width: 0 3px 3px 0;
  	display: inline-block;
  	padding: 3px;
  	transform: rotate(-45deg);
  	-webkit-transform: rotate(-45deg);
  	color:white;
`
