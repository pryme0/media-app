import React from 'react';
import { FixMeLater } from '../../../../types';
import StreamNav from '../../StreamNavs/TwitterStreamNav';
import TwitterStreamPanels from './TwitterStreamPanels';

interface IProps {
	socialAccount: FixMeLater;
}

const TwitterStream = ({ socialAccount }: IProps) => {
	let [currentStream, setCurrentStream] = React.useState<number>(0);

	return (
		<div style={{ display: 'flex', width: '100%' }}>
			<StreamNav value={currentStream} setValue={setCurrentStream} />
			<TwitterStreamPanels value={currentStream} socialAccount={socialAccount} />
		</div>
	);
};

export default TwitterStream;
