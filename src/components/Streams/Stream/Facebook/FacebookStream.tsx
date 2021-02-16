import React, { useEffect, useState } from 'react';
import { FixMeLater } from '../../../../types';
import FacebookStreamNav from '../../StreamNavs/FacebokStreamNav';
import LoadStream from './facebookFeeds/LoadStream';

interface IProps {
	socialAccount: FixMeLater;
}

const FacebookStream = ({ socialAccount }: IProps) => {
	let [posts, setPosts] = useState<FixMeLater[]>([]);
	let [value, setValue] = React.useState<number>(0);
	let [stream, setStream] = React.useState<string>('Home Feeds');

	useEffect(() => {
		switch (value) {
			case 0:
				setStream('Home Feeds');
				break;
			case 1:
				setStream('User Feeds');
				break;
			default:
				setStream('Home Feeds');
				break;
		}
	});

	return (
		<div>
			<FacebookStreamNav socialAccount={socialAccount} value={value} setValue={setValue} setStream={setStream} />
			<LoadStream socialAccount={socialAccount} stream={stream} />
		</div>
	);
};

export default FacebookStream;
