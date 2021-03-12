import { FixMeLater } from '../types';
import { apiCall } from './api';

export const getHomeStream = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/home_timeline/${accountId}`);
};

export const getUserTimeline = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/user_timeline/${accountId}`);
};

export const getUserMentions = (userName: string | number) => {
	// return apiCall('get', `/api/oauth/twitter/mention_timeline/${userName}`);
	return apiCall('get', `/api/oauth/twitter/mention_timeline/devSantosBright`);
};

export const getUserFollowers = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/followers/${accountId}`);
};

export const getUserFollowing = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/friends/${accountId}`);
};

export const favoriteTweet = (accountId: string | number, tweetStrId: string | number) => {
	return apiCall('post', `/api/oauth/twitter/create_favorite/${accountId}/${tweetStrId}`);
};

export const destroyFavorite = (accountId: string | number, tweetStrId: string | number) => {
	return apiCall('post', `/api/oauth/twitter/destroy_favorite/${accountId}/${tweetStrId}`);
};

export const retweet = (accountId: string | number, tweetStrId: string | number) => {
	return apiCall('post', `/api/oauth/twitter/retweet/${accountId}/${tweetStrId}`);
};

export const unRetweet = (accountId: string | number, tweetStrId: string | number) => {
	return apiCall('post', `/api/oauth/twitter/unretweet/${accountId}/${tweetStrId}`);
};

export const formatCount = (count: number) => {
	let res: number | string = 1;
	if (count > 1000) res = `${Math.floor(count / 1000)}k`;
	else res = count;
	return res;
};

export const favoriteResponse = (tweets: FixMeLater, tweetStrId: string) => {
	let res: FixMeLater[] = [];
	tweets.map((tweet: FixMeLater) => {
		if (tweet.id_str == tweetStrId) {
			if (tweet.retweeted_status) {
				let data = {
					...tweet,
					favorited: true,
					favorite_count: tweet.favorite_count + 1,
					retweeted_status: {
						...tweet.retweeted_status,
						favorited: true,
						favorite_count: tweet.retweeted_status.favorite_count + 1,
					},
				};
				res.push(data);
			} else {
				let data = {
					...tweet,
					favorited: true,
					favorite_count: tweet.favorite_count + 1,
				};
				res.push(data);
			}
		} else {
			res.push(tweet);
		}
	});
	return res;
};

export const unFavoriteResponse = (tweets: FixMeLater, tweetStrId: string) => {
	let res: FixMeLater[] = [];
	tweets.map((tweet: FixMeLater) => {
		if (tweet.id_str == tweetStrId) {
			if (tweet.retweeted_status) {
				let data = {
					...tweet,
					favorited: false,
					favorite_count: tweet.favorite_count - 1,
					retweeted_status: {
						...tweet.retweeted_status,
						favorited: false,
						favorite_count: tweet.retweeted_status.favorite_count - 1,
					},
				};
				res.push(data);
			} else {
				let data = {
					...tweet,
					favorited: false,
					favorite_count: tweet.favorite_count - 1,
				};
				res.push(data);
			}
		} else {
			res.push(tweet);
		}
	});
	return res;
};

export const unRetweetResponse = (tweets: FixMeLater, tweetStrId: string) => {
	let res: FixMeLater[] = [];
	tweets.map((tweet: FixMeLater) => {
		if (tweet.id_str == tweetStrId) {
			if (tweet.retweeted_status) {
				let data = {
					...tweet,
					retweeted: false,
					retweet_count: tweet.retweet_count - 1,
					retweeted_status: { ...tweet.retweeted_status, retweeted: false, retweet_count: tweet.retweeted_status.retweet_count - 1 },
				};
				res.push(data);
			} else {
				let data = {
					...tweet,
					retweeted: false,
					retweet_count: tweet.retweet_count - 1,
				};
				res.push(data);
			}
		} else {
			res.push(tweet);
		}
	});
	return res;
};

export const retweetResponse = (tweets: FixMeLater, tweetStrId: string) => {
	let res: FixMeLater[] = [];
	tweets.map((tweet: FixMeLater) => {
		if (tweet.id_str == tweetStrId) {
			if (tweet.retweeted_status) {
				let data = {
					...tweet,
					retweeted: true,
					retweet_count: tweet.retweet_count + 1,
					retweeted_status: { ...tweet.retweeted_status, retweeted: true, retweet_count: tweet.retweeted_status.retweet_count + 1 },
				};
				res.push(data);
			} else {
				let data = {
					...tweet,
					retweeted: true,
					retweet_count: tweet.retweet_count + 1,
				};
				res.push(data);
			}
		} else {
			res.push(tweet);
		}
	});
	return res;
};
