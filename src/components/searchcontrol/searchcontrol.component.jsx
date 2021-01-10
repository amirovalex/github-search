import React from 'react';
import SearchBox from '../searchbox/searchbox.component.jsx';
import PagesCarousel from '../pagescarousel/pagescarousel.component.jsx';
import { SearchControlContainer, SearchBoxContainer } from './searchcontrol.styles.js';
import SearchButton from '../searchbutton/searchbutton.component.jsx';

export const SearchControl = () => {
	return(
		<SearchControlContainer>
			<SearchBoxContainer>
				<SearchBox/>
				<SearchButton/>
			</SearchBoxContainer>
			<PagesCarousel/>
		</SearchControlContainer>
	)
}

export default SearchControl;