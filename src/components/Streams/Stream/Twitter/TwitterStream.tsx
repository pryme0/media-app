import React from 'react';
import { FixMeLater } from '../../../../types';
import StreamNav from '../../StreamNavs/TwitterStreamNav';
import Tweets from './Tweets';

interface IProps {
	socialAccount: FixMeLater;
}

const TwitterStream = ({ socialAccount }: IProps) => {
	const [value, setValue] = React.useState<number>(0);

	return (
		<div style={{ display: 'flex', width: '100%' }}>
			<StreamNav value={value} setValue={setValue} />
			<Tweets socialAccount={socialAccount} />
		</div>
	);
};

export default TwitterStream;
