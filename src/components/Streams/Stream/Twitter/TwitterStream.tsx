import React, { useEffect } from 'react';
import { FixMeLater } from '../../../../types';
import StreamNav from '../../StreamNavs/TwitterStreamNav';
import TwitterStreamPanels from './TwitterStreamPanels';

interface IProps {
	socialAccount: FixMeLater;
}

const TwitterStream = ({ socialAccount }: IProps) => {
	let [value, setValue] = React.useState<number>(0);

	return (
		<div style={{ display: 'flex', width: '100%' }}>
			<StreamNav value={value} setValue={setValue} />
			<TwitterStreamPanels value={value} socialAccount={socialAccount} />
		</div>
	);
};

export default TwitterStream;
