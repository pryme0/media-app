import React, { useEffect, useState } from 'react';
import { getFacebookPost } from '../../../../../services/facebookStream';
import { FixMeLater } from '../../../../../types';
import StreamContainer from '../../../StreamContainer';
import Loader from '../Loader';
import Post from './Post';

interface IProps {
	socialAccount: FixMeLater;
}

const HomeFeed = ({ socialAccount }: IProps) => {
	let [posts, setPosts] = useState<FixMeLater[]>([]);
	let [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		getFacebookPost(socialAccount.accountId).then((res: FixMeLater) => {
			setLoading(false);
			setPosts(res.posts.data);
		});
	}, []);

	return <StreamContainer>{loading ? <Loader /> : posts && posts.map((post: FixMeLater) => <Post post={post} />)} </StreamContainer>;
};

export default HomeFeed;
