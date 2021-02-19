import { apiCall } from './api';

export const getHomeStream = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/home_timeline/${accountId}`);
};

export const getUserMentions = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/mention_timeline/${accountId}`);
};

export const getUserFollowers = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/followers/${accountId}`);
};

export const getUserFollowing = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/friends/${accountId}`);
};
