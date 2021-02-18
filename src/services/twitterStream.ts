import { apiCall } from './api';

export const getHomeStream = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/home_timeline/${accountId}`);
};

export const getUserMentions = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/mention_timeline/${accountId}`);
};
