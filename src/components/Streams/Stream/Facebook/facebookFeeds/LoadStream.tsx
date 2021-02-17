import React, { Fragment } from 'react';
import HomeFeeds from './HomeFeeds';
import { FixMeLater } from '../../../../../types';

interface IProps {
	stream: string;
	socialAccount: FixMeLater;
}

const LoadStream = ({ socialAccount, stream }: IProps) => {
	switch (stream) {
		case 'Home Feeds':
			return (
				<Fragment>
					<HomeFeeds socialAccount={socialAccount} />
				</Fragment>
			);
		case 'User Feeds':
			return (
				<Fragment>
					<h3>'USER FEEDS'</h3>
				</Fragment>
			);
		default:
			return <Fragment></Fragment>;
	}
};

export default LoadStream;
