import axios, { AxiosResponse, AxiosError } from 'axios';
import Logout from '../containers/Logout';

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
		if (error.response.status === 401) {
			Logout();
		}
		return Promise.reject(error.response);
	}
);

export function setAuthorizationToken(token: string) {
	if (token) {
		instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete instance.defaults.headers.common['Authorization'];
	}
}

export function setRefreshToken(refreshToken: string) {
	if (refreshToken) {
		instance.defaults.headers.common['refresh-token'] = `${refreshToken}`;
	} else {
		delete instance.defaults.headers.common['refresh-token'];
	}
}

export function deleteTokens() {
	delete instance.defaults.headers.common['Authorization'];
	delete instance.defaults.headers.common['refresh-token'];
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
