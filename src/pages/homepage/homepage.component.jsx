import React from 'react';
import SearchBox from '../../components/searchbox/searchbox.component.jsx';
import SearchButton from '../../components/searchbutton/searchbutton.component.jsx';
import { BigContainer, SmallContainer, Title,
		 SearchContainer } from './homepage.styles.js';

export const HomePage = () => (
  <BigContainer>
  	<SmallContainer>
    <Title>Search github user</Title>
    <SearchContainer>
	    <SearchBox/>
	    <SearchButton/>
    </SearchContainer>
    </SmallContainer>
  </BigContainer>
)

export default HomePage;