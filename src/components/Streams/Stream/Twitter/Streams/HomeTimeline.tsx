import React, { useEffect, useState } from 'react';
import Timeline from './Tweet/Timeline';
import StreamContainer from '../../../StreamContainer';
import { useStyles } from '../styles/Tweet.styles';
import { FixMeLater } from '../../../../../types';
import { getHomeStream, favoriteTweet, destroyFavorite, unRetweet, retweet } from '../../../../../services/twitterStream';
import Loader from './Loader';

interface IProps {
	socialAccount: FixMeLater;
}

const HomeTimeline = ({ socialAccount }: IProps) => {
	let [homeStream, setHomeStream] = React.useState<FixMeLater>([]);
	let [loading, setLoading] = React.useState<boolean>(true);

	let toggleFavorite = (tweetStrId: string, favorited: boolean) => {
		console.log(tweetStrId, favorited);
		if (favorited) {
			destroyFavorite(socialAccount.accountId, tweetStrId)
				.then(({ result }: FixMeLater) => {
					console.log('result');
					let newStream = homeStream.map((tweet: FixMeLater) => (tweet.id === result.id ? result : tweet));
					setHomeStream(newStream);
				})
				.catch((error) => {
					error.message ? console.log(error.message) : console.log(error);
				});
		} else {
			favoriteTweet(socialAccount.accountId, tweetStrId)
				.then(({ result }: FixMeLater) => {
					console.log('result');
					let newStream = homeStream.map((tweet: FixMeLater) => (tweet.id_str === result.id_str ? result : tweet));
					setHomeStream(newStream);
				})
				.catch((error) => {
					console.log(error);
					error.message ? console.log(error.message) : console.log(error);
				});
		}
	};

	let toggleRetweet = (tweetStrId: string, retweeted: boolean) => {
		console.log(tweetStrId, retweeted);
		if (retweeted) {
			unRetweet(socialAccount.accountId, tweetStrId)
				.then(({ result }: FixMeLater) => {
					debugger;
					console.log('result');
					let newStream = homeStream.map((tweet: FixMeLater) => (tweet.id === result.id ? result : tweet));
					setHomeStream(newStream);
				})
				.catch((error) => {
					error.message ? console.log(error.message) : console.log(error);
				});
		} else {
			retweet(socialAccount.accountId, tweetStrId)
				.then(({ result }: FixMeLater) => {
					debugger;
					console.log('result');
					let newStream = homeStream.map((tweet: FixMeLater) => (tweet.id_str === result.id_str ? result : tweet));
					setHomeStream(newStream);
				})
				.catch((error) => {
					console.log(error);
					error.message ? console.log(error.message) : console.log(error);
				});
		}
	};

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

	return (
		<StreamContainer>
			{loading ? (
				<Loader />
			) : (
				homeStream.map((tweet: FixMeLater) => (
					<Timeline tweet={tweet} socialAccount={socialAccount} toggleFavorite={toggleFavorite} toggleRetweet={toggleRetweet} />
				))
			)}
		</StreamContainer>
	);
};

export default HomeTimeline;
