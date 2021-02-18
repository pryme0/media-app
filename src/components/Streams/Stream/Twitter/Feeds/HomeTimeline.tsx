import React, { useEffect, useState } from 'react';
import Post from '../Tweet';
import StreamContainer from '../../../StreamContainer';
import { useStyles } from '../styles/Tweet.styles';
import { FixMeLater } from '../../../../../types';
import { getHomeStream } from '../../../../../services/twitterStream';
import Loader from './Loader';

interface IProps {
	socialAccount: FixMeLater;
}

const HomeTimeline = ({ socialAccount }: IProps) => {
	let [homeStream, setHomeStream] = React.useState<FixMeLater>([]);
	let [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		getHomeStream(socialAccount.accountId)
			.then(({ result }: FixMeLater) => {
				setLoading(false);
				setHomeStream(result);
			})
			.catch((error) => {
				error.message ? console.log(error.message) : console.log(error);
			});
	}, []);

	return <StreamContainer>{loading ? <Loader /> : homeStream.map((tweet: FixMeLater) => <Post tweet={tweet.tweet} />)}</StreamContainer>;
};

export default HomeTimeline;
