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
