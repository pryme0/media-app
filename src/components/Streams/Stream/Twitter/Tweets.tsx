import React, { useEffect, useState } from 'react';
import Post from './Post';
import StreamContainer from '../../StreamContainer';
import { getHomeStream } from '../../../../services/twitterStream';
import { useStyles } from './styles/Tweet.styles';
import { FixMeLater } from '../../../../types';

interface IProps {
	socialAccount: FixMeLater;
}

const Tweet = ({ socialAccount }: IProps) => {
	let [feeds, setFeeds] = useState<FixMeLater[]>([]);

	useEffect(() => {
		getHomeStream(socialAccount.accountID);
		// setFeeds(res.posts.data);
		// console.log(rses);
		debugger;
	}, []);

	return (
		<StreamContainer>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</StreamContainer>
	);
};

export default Tweet;
