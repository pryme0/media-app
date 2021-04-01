import axios, { AxiosResponse, AxiosError } from 'axios';
import { FixMeLater } from '../types';

// Set config defaults when creating the instance
const instance = axios.create({
	baseURL: 'https://buzzroom.herokuapp.com',
});

instance.interceptors.response.use(
	(response) => {
		console.log('Intercepting');
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
