import { useState } from 'react';
import InstagramStreamNav from '../../StreamNavs/InstagramStreamNav';
import InstagramStreamPanels from './InstagramStreamPanels';
import { FixMeLater } from '../../../../types';

interface IProps {
	socialAccount: FixMeLater;
}

const InstagramStream = ({ socialAccount }: IProps) => {
	let [value, setValue] = useState<number>(0);

	return (
		<div>
			<InstagramStreamNav value={value} setValue={setValue} />
			<InstagramStreamPanels socialAccount={socialAccount} value={value} />
		</div>
	);
};

export default InstagramStream;
