import React, { useEffect, useState } from 'react';
import Timeline from './Tweet/Timeline';
import StreamContainer from '../../../StreamContainer';
import { useStyles } from '../styles/Tweet.styles';
import { FixMeLater } from '../../../../../types';
import { getHomeStream, favoriteTweet, destroyFavorite, unRetweet, retweet } from '../../../../../services/twitterStream';
import Loader from './Loader';

interface IProps {
	socialAccount: FixMeLater;
	currentStream: FixMeLater;
	setCurrentStream: React.Dispatch<any>;
	toggleRetweet: (tweetStrId: string, retweeted: boolean) => void;
	toggleFavorite: (tweetStrId: string, retweeted: boolean) => void;
}

const HomeTimeline = ({ socialAccount, currentStream, setCurrentStream, toggleRetweet, toggleFavorite }: IProps) => {
	let [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		getHomeStream(socialAccount.accountId)
			.then(({ result }: FixMeLater) => {
				setLoading(false);
				setCurrentStream(result);
			})
			.catch((error) => {
				error.message ? console.log(error.message) : console.log(error);
			});
	}, []);

	return (
		<StreamContainer>
			{loading ? (
				<Loader />
			) : (
				currentStream.map((tweet: FixMeLater) => (
					<Timeline tweet={tweet} socialAccount={socialAccount} toggleFavorite={toggleFavorite} toggleRetweet={toggleRetweet} />
				))
			)}
		</StreamContainer>
	);
};

export default HomeTimeline;
