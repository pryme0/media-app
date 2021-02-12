import React, { useState } from 'react';
import FacebookStream from './Facebook/FacebookStream';
import TwitterStream from './Twitter/TwitterStream';
import { FixMeLater } from '../../../types';

interface IProps {
	socialAccount: FixMeLater;
}

const Stream = ({ socialAccount }: IProps) => {
	const streamProviderType = socialAccount.account.accountType.toUpperCase();

	// this block of code will render different stream base on the social provider type
	const renderStreamSocial = (): JSX.Element => {
		if (streamProviderType === 'TWITTER') {
			return <TwitterStream />;
		} else if (streamProviderType === 'FACEBOOK') {
			return <FacebookStream socialAccount={socialAccount.account} />;
		} else if (streamProviderType === 'INSTAGRAM') {
			return <h1>Instagram</h1>;
		} else if (streamProviderType === 'LINKEDIN') {
			return <h1>Linkedin</h1>;
		} else {
			return <h1>Stream</h1>;
		}
	};

	return renderStreamSocial();
};

export default Stream;
