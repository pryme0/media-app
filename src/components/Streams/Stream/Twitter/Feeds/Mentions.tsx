import React, { useEffect, useState } from 'react';
import Post from '../Tweet';
import StreamContainer from '../../../StreamContainer';
import { useStyles } from '../styles/Tweet.styles';
import { FixMeLater } from '../../../../../types';
import { getUserMentions } from '../../../../../services/twitterStream';
import Loader from './Loader';

interface IProps {
	socialAccount: FixMeLater;
}

const Mentions = ({ socialAccount }: IProps) => {
	let [mentions, setMentions] = React.useState<FixMeLater>([]);
	let [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		getUserMentions(socialAccount.accountId)
			.then(({ mentions }: FixMeLater) => {
				console.log(mentions.data);
				setLoading(false);
				setMentions(mentions.data);
			})
			.catch((error) => {
				error.message ? console.log(error.message) : console.log(error);
			});
	}, []);

	return <StreamContainer>{loading ? <Loader /> : mentions.map((tweet: FixMeLater) => <Post tweet={tweet.tweet} />)}</StreamContainer>;
};

export default Mentions;
