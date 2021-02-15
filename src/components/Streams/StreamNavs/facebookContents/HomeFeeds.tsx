import React, { useEffect, useState } from 'react';
import { getFacebookPost } from '../../../../services/facebookStream';
import { FixMeLater } from '../../../../types';

interface IProps {
	socialAccount: FixMeLater;
}

const HomeFeeds = ({ socialAccount }: IProps) => {
	let [posts, setPosts] = useState<FixMeLater[]>([]);

	useEffect(() => {
		getFacebookPost(socialAccount.accountId).then((res: FixMeLater) => {
			setPosts(res.posts.data);
		});
	}, []);

	return (
		<div>
			<h1>Facebook Home Feeds </h1>
			{posts.map((post: FixMeLater) => (
				<p>{post.message}</p>
			))}
		</div>
	);
};

export default HomeFeeds;
