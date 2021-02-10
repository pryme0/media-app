import React from 'react';
import FacebookStreamNav from '../StreamNavs/FacebokStreamNav';
import TwitterStreamNav from '../StreamNavs/TwitterStreamNav';
import FacebookStream from './Facebook/FacebookStream';
import { FixMeLater } from '../../../types';

interface IProps {
	socialAccount: FixMeLater;
}

const Stream = ({ socialAccount }: IProps) => {
	const [value, setValue] = React.useState<number>(0);

	return (
		<div>
			{socialAccount.account.name}
			{/* <TwitterStreamNav value={value} setValue={setValue} /> */}
			<FacebookStreamNav value={value} setValue={setValue} />
			<FacebookStream socialAccount={socialAccount.account} />
		</div>
	);
};

export default Stream;
