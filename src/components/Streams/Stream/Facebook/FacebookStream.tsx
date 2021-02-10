import React, { useEffect, useState } from 'react';
import { FixMeLater } from '../../../../types';
import { getFacebookPost } from '../../../../services/facebookStream';

interface IProps {
	socialAccount: FixMeLater;
}

const FacebookStream = ({ socialAccount }: IProps) => {
	let [posts, setPosts] = useState<FixMeLater[]>([]);

	useEffect(() => {
		getFacebookPost(socialAccount.accountId).then((res: FixMeLater) => {
			debugger;
			setPosts(res.posts.data);
		});
	}, []);

	return (
		<div>
			{posts.map((post: FixMeLater) => (
				<p>{post.message}</p>
			))}
		</div>
	);
};

export default FacebookStream;
