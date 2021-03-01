import React, { useEffect, useState } from 'react';
import Tweet from './Tweet/Tweet';
import StreamContainer from '../../../StreamContainer';
import { useStyles } from '../styles/Tweet.styles';
import { FixMeLater } from '../../../../../types';
import { getUserMentions } from '../../../../../services/twitterStream';
import Loader from './Loader';

interface IProps {
	socialAccount: FixMeLater;
	currentStream: FixMeLater;
	setCurrentStream: React.Dispatch<any>;
	toggleRetweet: (tweetStrId: string, retweeted: boolean) => void;
	toggleFavorite: (tweetStrId: string, retweeted: boolean) => void;
}

const Mentions = ({ socialAccount, currentStream, setCurrentStream, toggleRetweet, toggleFavorite }: IProps) => {
	let [mentions, setMentions] = React.useState<FixMeLater>([]);
	let [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		getUserMentions(socialAccount.accountId)
			.then(({ mentions }: FixMeLater) => {
				setLoading(false);
				setMentions(mentions.data);
			})
			.catch((error) => {
				error.message ? console.log(error.message) : console.log(error);
			});
	}, []);

	return (
		<StreamContainer>
			{loading ? (
				<Loader />
			) : mentions ? (
				mentions.map((tweet: FixMeLater) => (
					<Tweet tweet={tweet} socialAccount={socialAccount} toggleFavorite={toggleFavorite} toggleRetweet={toggleRetweet} />
				))
			) : (
				<h2>No Mention Found</h2>
			)}
		</StreamContainer>
	);
};

export default Mentions;
