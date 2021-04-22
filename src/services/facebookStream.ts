import { apiCall } from './api';
import LocalBase from 'localbase';
import { updateCacheData, cacheData } from './utils';
import { FixMeLater } from '../types';

let db = new LocalBase('buzzroom');

export const getFacebookPost = async (accountId: string | number) => {
	let feed: any[] = [];
	let cache = await db
		.collection(accountId)
		.get()
		.then((data: FixMeLater) => {
			feed = data;
			return data.length;
		});

	if (cache > 0) return { posts: { data: feed } };
	else {
		// cacheData(accountId, 'home_feed', 'get', `/api/oauth/facebook/getPagePosts/${accountId}`);
		return await apiCall('get', `/api/oauth/facebook/getPagePosts/${accountId}`);
	}
};

export const likePost = async (postId: string | number) => {
	return await apiCall('get', `/api/oauth/facebook/likepost/${postId}`);
};

export const unLikePost = async (postId: string | number) => {
	return await apiCall('get', `/api//oauth/facebook/unlikepost/${postId}`);
};
