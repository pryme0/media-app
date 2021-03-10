import { apiCall } from './api';

export const getFacebookPost = async (accountId: string | number) => {
	return await apiCall('get', `/api/oauth/facebook/getPagePosts/${accountId}`);
};

export const likePost = async (postId: string | number) => {
	return await apiCall('get', `/api/oauth/facebook/likepost/${postId}`);
};

export const unLikePost = async (postId: string | number) => {
	return await apiCall('get', `/api//oauth/facebook/unlikepost/${postId}`);
};
