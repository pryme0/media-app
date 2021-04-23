import axios, { AxiosResponse, AxiosError } from 'axios';
import { Console } from 'console';
import { request } from 'http';
// import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { FixMeLater } from '../types';
import { updateCacheData, cacheData } from './utils';

// Set config defaults when creating the instance
const instance = axios.create({
	baseURL: 'https://buzzroom.herokuapp.com',
});

instance.interceptors.request.use(
	function (request) {
		return request;
	},
	function (error) {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response: FixMeLater) => {
		console.log('Intercepting', response);
		let uri = response.config.url?.split('/');
		if (uri.length >= 5) {
			if (uri[3] === 'twitter' && uri[4] === 'home_timeline') {
				console.log('TWITTER ', response.data.result);
				cacheData(uri[5], uri[4], { result: response.data.result });
			}
			if (uri[3] === 'facebook' && uri[4] === 'getPagePosts') {
				cacheData(uri[5], uri[4], { result: response.data.posts.data });
			}
		}
		return response;
	},
	function (error) {
		console.log(error);
		if (error.response === 401 || error.response.status === 401) {
			setRefreshToken();
			removeAuthHeader();
			apiCall('get', '/api/oauth/refreshUserToken')
				.then((res: FixMeLater) => {
					setAuthorizationToken(res.token);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		return Promise.reject(error.response);
	}
);

export function setAuthorizationToken(token: string | null) {
	if (token) {
		removeAuthHeader();
		instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		localStorage.setItem('Authorization', `${token}`);
	} else {
		removeAuthHeader();
	}
}

export function setRefreshToken(refreshToken?: string | null) {
	if (refreshToken) {
		removeRefreshToken();
		instance.defaults.headers.common['refresh-token'] = `Bearer ${refreshToken}`;
		localStorage.setItem('refresh-token', `${refreshToken}`);
	} else {
		if (localStorage.getItem('refresh-token')) {
			let refreshToken = localStorage.getItem('refresh-token');
			instance.defaults.headers.common['refresh-token'] = `Bearer ${refreshToken}`;
		} else {
			removeRefreshToken();
		}
	}
}

export function deleteTokens() {
	delete instance.defaults.headers.common['Authorization'];
	delete instance.defaults.headers.common['refresh-token'];
	localStorage.clear();
}

export function removeAuthHeader() {
	delete instance.defaults.headers.common['Authorization'];
	localStorage.removeItem('Authorization');
	console.log('Removed Auth Header');
}

export function removeRefreshToken() {
	delete instance.defaults.headers.common['refresh-token'];
	localStorage.removeItem('refresh-token');
	console.log('Removed refresh token');
}

export function apiCall(method: string, path: string, data?: any) {
	return new Promise((resolve, reject) => {
		return (instance as any)
			[method](path, data)
			.then((res: AxiosResponse<any>) => {
				return resolve(res.data);
			})
			.catch((err: AxiosError) => {
				return reject(err);
			});
	});
}

export function getAccountType(url: string | undefined) {
	if (url) {
		let arr = url.split('/');
		if (arr[3]) return arr[3].toUpperCase();
	}
}

export function getAccountId(url: string | undefined) {
	if (url) {
		let arr = url.split('/');
		if (arr[5]) return arr[5].toUpperCase();
	}
}
