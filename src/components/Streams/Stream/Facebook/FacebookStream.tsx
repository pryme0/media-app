import React, { useEffect, useState } from 'react';
import { FixMeLater } from '../../../../types';
import FacebookStreamNav from '../../StreamNavs/FacebokStreamNav';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const links = [
	{ icon: faHome, text: 'Home Feeds', to: '/' },
	{ icon: faTwitter, text: 'User Feeds', to: '/' },
];

interface IProps {
	socialAccount: FixMeLater;
}

const FacebookStream = ({ socialAccount }: IProps) => {
	let [posts, setPosts] = useState<FixMeLater[]>([]);
	let [value, setValue] = React.useState<number>(0);

	return (
		<div>
			<FacebookStreamNav socialAccount={socialAccount} value={value} setValue={setValue} links={links} />
		</div>
	);
};

export default FacebookStream;
