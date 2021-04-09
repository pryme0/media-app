import React, { useEffect, useState } from 'react';
import Timeline from './Tweet/Timeline';
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
	let [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		getUserMentions(socialAccount.userName)
			.then(({ mentions }: FixMeLater) => {
				setLoading(false);
				setCurrentStream(mentions.statuses);
			})
			.catch((error) => {
				error.message ? console.log(error.message) : console.log(error);
			});
	}, []);

	return (
		<StreamContainer
			stream={'User Mentions'}
			accountId={socialAccount.accountId}
			url={`/twitter/mention_timeline/${socialAccount.userName}`}
			setCurrentStream={setCurrentStream}
			setLoading={setLoading}
		>
			{loading ? (
				<Loader />
			) : currentStream ? (
				currentStream.map((tweet: FixMeLater) => (
					<Timeline tweet={tweet} socialAccount={socialAccount} toggleFavorite={toggleFavorite} toggleRetweet={toggleRetweet} />
				))
			) : (
				<h2>No Mention Found</h2>
			)}
		</StreamContainer>
	);
};

export default Mentions;
