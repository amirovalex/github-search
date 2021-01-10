import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
	height:100%;
	font-family: 'Alata', sans-serif;
	input {
		font-family: 'Alata', sans-serif;
	}
`

export const HtmlStyle = createGlobalStyle`
	* {
		box-sizing:border-box;
	}
	html {
		height:100%;
		background: rgb(215,197,197);
		background: radial-gradient(circle, rgba(215,197,197,1) 0%, rgba(254,246,246,1) 100%);
	}
	body,#root {
		height:100%;
	}
`