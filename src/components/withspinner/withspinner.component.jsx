import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './withspinner.styles.js';

const WithSpinner = WrappedComponent => ({isFetching,...props}) => {


	return isFetching ? 
			<SpinnerOverlay>
				<SpinnerContainer/>
			</SpinnerOverlay> : 
			<WrappedComponent {...props}/>
}

export default WithSpinner;