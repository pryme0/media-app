import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { FixMeLater } from '../../../../types';
import HomeTimeline from './Streams/HomeTimeline';
import Mentions from './Streams/Mentions';
import Followers from '../Twitter/Streams/Followers/FollowersFeed';
import { favoriteTweet, destroyFavorite, unRetweet, retweet } from '../../../../services/twitterStream';

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
			{value === index && (
				<Box p={0}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

interface Props {
	value: any;
	socialAccount: FixMeLater;
}

const TwitterStreamPanels = ({ value, socialAccount }: Props) => {
	let [currentStream, setCurrentStream] = React.useState<FixMeLater>([]);

	let toggleFavorite = (tweetStrId: string, favorited: boolean) => {
		if (favorited) {
			destroyFavorite(socialAccount.accountId, tweetStrId)
				.then(({ result }: FixMeLater) => {
					let newStream;
					if (result) {
						newStream = currentStream.map((tweet: FixMeLater) => (tweet.id === result.id ? result : tweet));
					} else {
						newStream = currentStream.map((tweet: FixMeLater) =>
							tweet.id_str == tweetStrId
								? {
										...tweet,
										favorited: false,
										favorite_count: tweet.favorite_count - 1,
										retweeted_status: {
											...tweet.retweeted_status,
											favorited: false,
											favorite_count: tweet.retweeted_status.favorite_count - 1,
										},
								  }
								: tweet
						);
					}
					setCurrentStream(newStream);
				})
				.catch((error) => {
					error.message ? console.log(error.response) : console.log(error);
				});
		} else {
			favoriteTweet(socialAccount.accountId, tweetStrId)
				.then(({ result }: FixMeLater) => {
					let newStream;
					if (result) {
						newStream = currentStream.map((tweet: FixMeLater) => (tweet.id === result.id ? result : tweet));
					} else {
						newStream = currentStream.map((tweet: FixMeLater) =>
							tweet.id_str == tweetStrId
								? {
										...tweet,
										favorited: true,
										favorite_count: tweet.favorite_count + 1,
										retweeted_status: {
											...tweet.retweeted_status,
											favorited: true,
											favorite_count: tweet.retweeted_status.favorite_count + 1,
										},
								  }
								: tweet
						);
					}
					setCurrentStream(newStream);
				})
				.catch((error) => {
					console.log(error);
					error.message ? console.log(error.response) : console.log(error);
				});
		}
	};

	let toggleRetweet = (tweetStrId: string, retweeted: boolean) => {
		console.log('str id ', tweetStrId);
		if (retweeted) {
			unRetweet(socialAccount.accountId, tweetStrId)
				.then(({ result }: FixMeLater) => {
					console.log(result);
					let newStream = currentStream.map((tweet: FixMeLater) =>
						tweet.id_str == tweetStrId
							? {
									...tweet,
									retweeted: false,
									retweet_count: tweet.retweet_count - 1,
									retweeted_status: { ...tweet.retweeted_status, retweeted: false, retweet_count: tweet.retweeted_status.retweet_count - 1 },
							  }
							: tweet
					);
					setCurrentStream(newStream);
				})
				.catch((error) => {
					error.message ? console.log(error.message) : console.log(error);
				});
		} else {
			retweet(socialAccount.accountId, tweetStrId)
				.then(({ result }: FixMeLater) => {
					console.log(result);
					let newStream = currentStream.map((tweet: FixMeLater) =>
						tweet.id_str === tweetStrId
							? {
									...tweet,
									retweeted: true,
									retweet_count: tweet.retweet_count + 1,
									retweeted_status: { ...tweet.retweeted_status, retweeted: true, retweet_count: tweet.retweeted_status.retweet_count + 1 },
							  }
							: tweet
					);
					setCurrentStream(newStream);
				})
				.catch((error) => {
					console.log(error);
					error.message ? console.log(error.message) : console.log(error);
				});
		}
	};

	return (
		<>
			<TabPanel value={value} index={0}>
				<HomeTimeline
					socialAccount={socialAccount}
					currentStream={currentStream}
					setCurrentStream={setCurrentStream}
					toggleFavorite={toggleFavorite}
					toggleRetweet={toggleRetweet}
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Mentions
					socialAccount={socialAccount}
					currentStream={currentStream}
					setCurrentStream={setCurrentStream}
					toggleFavorite={toggleFavorite}
					toggleRetweet={toggleRetweet}
				/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<h1>Item Two Lorem ipsum dolor sit. 3</h1>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Followers socialAccount={socialAccount} />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<h1>Item Two Lorem ipsum dolor sit Tweets.</h1>
			</TabPanel>
			<TabPanel value={value} index={5}>
				<h1>Item Two Lorem ipsum dolor sit Reweets.</h1>
			</TabPanel>
			<TabPanel value={value} index={6}>
				<h1>Item Two Lorem ipsum dolor sit Scedule.</h1>
			</TabPanel>
		</>
	);
};

export default TwitterStreamPanels;
