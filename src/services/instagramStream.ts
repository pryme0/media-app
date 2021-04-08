import { apiCall } from './api';

export const getInstagramFeeds = async (accountId: string | number) => {
	return await apiCall('get', `/api/oauth/instagram/getUserPosts/${accountId}`);
};
