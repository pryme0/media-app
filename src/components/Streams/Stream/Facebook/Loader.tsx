import { BorderAllRounded } from '@material-ui/icons';
import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Loader = () => {
	return (
		<Fragment>
			<img src={spinner} alt="Loading..." style={{ width: '150px', margin: 'auto', display: 'block', marginTop: '50px' }} />
		</Fragment>
	);
};
export default Loader;
