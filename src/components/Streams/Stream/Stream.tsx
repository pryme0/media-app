import React from 'react';
import FacebookStreamNav from './Facebook/StreamNav';
import TwitterStreamNav from '../StreamNavs/TwitterStreamNav';
import { FixMeLater } from '../../../types';

interface IProps {
	socialAccount: FixMeLater;
}

const Stream = ({ socialAccount }: IProps) => {
	const [value, setValue] = React.useState<number>(0);
	return (
		<div>
			{/* <TwitterStreamNav value={value} setValue={setValue} /> */}
			<FacebookStreamNav value={value} setValue={setValue} />
		</div>
	);
};

export default Stream;
