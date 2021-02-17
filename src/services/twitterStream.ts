import { apiCall } from './api';

export const getHomeStream = async (accountId: string | number) => {
	let res = await apiCall('get', `/api/oauth/twitter/home_timeline/${accountId}`);
	debugger;
};
