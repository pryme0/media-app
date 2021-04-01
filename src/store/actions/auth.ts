import { Action, Dispatch } from 'redux';
import { apiCall, setAuthorizationToken, setRefreshToken } from '../../services/api';
import { addError, addSuccess } from 'redux-flash-messages';
import { FixMeLater } from '../../types';
import { AUTH } from '../actionTypes';
// import * as api from "../api/index.js";

export const auth = (formData: FixMeLater, history: FixMeLater, action: string, actions: any) => async (dispatch: Dispatch<Action>) => {
	try {
		const isRemember: boolean = formData.rememberMe;
		// delete formData.rememberMe;
		const data: FixMeLater = await apiCall('post', `/api/oauth/${action}`, formData);
		const { accessToken, user, refreshToken } = data;

		if (isRemember || action.toUpperCase() === 'SIGNUP') {
			localStorage.setItem('accessToken', accessToken);
			localStorage.setItem('refresh-token', refreshToken);
		}

		setAuthorizationToken(accessToken);
		setRefreshToken(refreshToken);
		dispatch({ type: AUTH, user });

		if (action === 'login')
			addSuccess({
				text: `Welcome back ${user.firstname}`,
			});

		history.push('/');
	} catch (error) {
		actions.setSubmitting(false);
		addError({
			text: error.error,
		});
	}
};

export const forgetPassword = (formData: FixMeLater, history: FixMeLater, actions: any) => async (dispatch: Dispatch<Action>) => {
	try {
		const data: FixMeLater = await apiCall('post', '/api/oauth/resetPassword_link', formData);
		console.log(data);
		addSuccess({
			text: data ? data : 'A reset link has been sent to your mail',
		});
	} catch (error) {
		actions.setSubmitting(false);
		addError({
			text: error.response ? error.response.data.error : 'Failed hint, make sure email is correct',
		});
		console.log(error.response);
	}
};

export const resetPassword = (formData: FixMeLater, history: FixMeLater, actions: any) => async (dispatch: Dispatch<Action>) => {
	try {
		let url = window.location.href;
		let arrUrl = url.split('/');
		formData.token = arrUrl[4];
		const data: FixMeLater = await apiCall('post', '/api/oauth/reset_password', formData);
		console.log(data);
		addSuccess({
			text: data ? data : 'A reset link has been sent to your mail',
		});
	} catch (error) {
		actions.setSubmitting(false);
		addError({
			text: error.response ? error.response.data.error : 'Failed hint, make sure email is correct',
		});
		console.log(error.response);
	}
};
