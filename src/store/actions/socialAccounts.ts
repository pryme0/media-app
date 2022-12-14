import { Action, Dispatch } from 'redux';
import { LOAD_SOCIAL_ACCOUNTS, GET_SOCIAL_ACCOUNT, ADD_SOCIAL_ACCOUNT, DELETE_SOCIAL_ACCOUNT } from '../actionTypes';
import { apiCall } from '../../services/api';
import { FixMeLater } from '../../types';

export const getSocialAccounts = () => async (dispatch: Dispatch<Action>) => {
	try {
		let { accounts: socialAccounts }: FixMeLater = await apiCall('get', '/api/oauth/accounts/getStreams');
		return dispatch({ type: LOAD_SOCIAL_ACCOUNTS, socialAccounts });
		// apiCall('get', '/api/oauth/accounts/getStreams')
		// 	.then(({ socialAccounts }: FixMeLater) => {
		// 		return dispatch({ type: LOAD_SOCIAL_ACCOUNTS, socialAccounts });
		// 	})
		// 	.catch((error) => {
		// 		console.log('ERROR ', error);
		// 		console.log('RESPONSE ', error.response);
		// 		console.log('MESSAGE ', error.message);
		// 		console.log('REQUEST ', error.request);
		// 	});
	} catch (error) {
		console.log(error);
	}
};

export const getHomeStream = (accountId: string | number) => {
	return apiCall('get', `/api/oauth/twitter/home_timeline/${accountId}`);
};
