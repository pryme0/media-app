import { apiCall } from './api';
import LocalBase from 'localbase';
import { FixMeLater } from '../types';

let db = new LocalBase('buzzroom');

export const debounce = (func: any, wait: number, immediate?: boolean) => {
	var timeout: any;

	return function executedFunction() {
		// var context: any = this;
		var context: any = 'this';
		var args: any = arguments;

		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		var callNow = immediate && !timeout;

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) func.apply(context, args);
	};
};

export const cacheData = async (accountId: string | number, collection: string, data: FixMeLater) => {
	db.collection(accountId).set(data.result);
};

export const updateCacheData = async (accountId: string | number, data: FixMeLater) => {
	await db.collection(accountId).set(data);
};

export const clearCacheData = async (accountId: string | number, url: string) => {
	let store: FixMeLater = await apiCall('get', `/api/oauth${url}`);
	debugger;
	if (url.includes('twitter')) await db.collection(accountId).set(store.result);
	if (url.includes('facebook')) await db.collection(accountId).set(store.posts);
};

export const getCacheData = async (accountId: string | number, url: string) => {
	try {
		await clearCacheData(accountId, url);
		return await db.collection(accountId).get();
	} catch (error) {
		return [];
	}
};
