import React from 'react';
import { Carousel, PageTag, PageNumber,
		 LeftArrow, RightArrow } from './pagescarousel.styles.js';
import { connect } from 'react-redux';
import { fetchUsersStartAsync } from '../../redux/search/search.actions.js';

const mapStateToProps = state => {
	return({
		page:state.searchUser.page,
		searchUser:state.searchUser.searchField,
		totalPages:state.searchUser.totalPages,
		isFetching:state.searchUser.isFetching
	})
}

const mapDispatchToProps = dispatch => ({
	fetchUsersStartAsync:(searchUser,pages)=>dispatch(fetchUsersStartAsync(searchUser,pages))
})
export const PagesCarousel = ({page,fetchUsersStartAsync,totalPages,searchUser,isFetching}) => {
	return(
		<Carousel isFetching={isFetching}>
			<PageTag onClick={() => fetchUsersStartAsync(searchUser,1)}>
			<PageNumber>First</PageNumber>
			</PageTag>
			<PageTag onClick={() => page !== 1 ? fetchUsersStartAsync(searchUser,page-1) : null}>
			<PageNumber><LeftArrow/></PageNumber>
			</PageTag>
			<PageTag selected={page !== 1 ? false : true} onClick={() => page !== 1 ? (page !== totalPages ? fetchUsersStartAsync(searchUser,page-1) : fetchUsersStartAsync(searchUser,page-2)) : null}>
			<PageNumber>{page !== 1 ? (page !== totalPages ? page-1 : page-2) : page}</PageNumber>
			</PageTag>
			{ totalPages > 1 ?
				<PageTag selected={page !== totalPages ? (page !== 1 ? true : false) : false} onClick={() => page !== 1 ? (page !== totalPages ? null : fetchUsersStartAsync(searchUser,page-1)) : fetchUsersStartAsync(searchUser,page+1)}>
				<PageNumber>{page !== 1 ? (page !== totalPages ? page : page-1) : page+1}</PageNumber>
				</PageTag>
			: null 
			}
			{ totalPages > 2 ?
				<PageTag selected={page !== totalPages ? false : true} onClick={() => page !== 1 ? (page !== totalPages ? fetchUsersStartAsync(searchUser,page+1) : null) : fetchUsersStartAsync(searchUser,page+2)}>
				<PageNumber>{page !== 1 ? (page !== totalPages ? page+1 : page ) : page+2}</PageNumber>
				</PageTag>
			: null
			}
			<PageTag onClick={() => page !== totalPages ? fetchUsersStartAsync(searchUser,page+1) : null}>
			<PageNumber><RightArrow/></PageNumber>
			</PageTag>
			<PageTag onClick={() => fetchUsersStartAsync(searchUser,totalPages)}>
			<PageNumber>Last</PageNumber>
			</PageTag>
		</Carousel>
	)
}

export default connect(mapStateToProps,mapDispatchToProps)(PagesCarousel);