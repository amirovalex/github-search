import styled,{css} from 'styled-components';
import { createGlobalStyle } from "styled-components";

const ResultsListCss = css`
	height: 100%;
    justify-content: center;
    align-items:center;
`
export const GlobalCssOnFetch = createGlobalStyle`
	html,body {
		${({fetching}) => fetching ? 'overflow:hidden' : null}
	}
`

export const ResultsPageContainer = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	${({fetching}) => fetching ? "height:100%;" : null}
`

export const PageTagsList = styled.div`

`

export const ResultsList = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	text-align:center;
	${({fetching}) => fetching ? ResultsListCss : null}
`

export const ResultsNumber = styled.h1`
	text-align:center;
`

export const LoadingOverlay = styled.div`
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.5);
	cursor:default;
	position:fixed;
	font-size:5vw;
	color:white;
	z-index:5;
	display:flex;
	align-items:center;
	justify-content:center;
	overflow:hidden;
	margin:0;
`