import { apiCall } from './api';

export const getFacebookPost = async (accountId: string | number) => {
	return await apiCall('get', `/api/oauth/facebook/getPagePosts/${accountId}`);
};
