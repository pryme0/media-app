import React, { useEffect, useState } from 'react';
import { FixMeLater } from '../../../../types';
import FacebookStreamNav from '../../StreamNavs/FacebokStreamNav';
import { getFacebookPost } from '../../../../services/facebookStream';

interface IProps {
	socialAccount: FixMeLater;
}

const FacebookStream = ({ socialAccount }: IProps) => {
	let [posts, setPosts] = useState<FixMeLater[]>([]);
	let [value, setValue] = React.useState<number>(0);

	useEffect(() => {
		getFacebookPost(socialAccount.accountId).then((res: FixMeLater) => {
			setPosts(res.posts.data);
		});
	}, []);

	return (
		<div>
			<FacebookStreamNav value={value} setValue={setValue} />
			<h1>Facebook </h1>
			{posts.map((post: FixMeLater) => (
				<p>{post.message}</p>
			))}
		</div>
	);
};

export default FacebookStream;
