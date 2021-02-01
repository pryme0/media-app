import { Action, Dispatch } from "redux";
import {
    LOAD_SOCIAL_ACCOUNTS,
    GET_SOCIAL_ACCOUNT,
    ADD_SOCIAL_ACCOUNT,
    DELETE_SOCIAL_ACCOUNT,
} from "../actionTypes";
import { apiCall } from "../../services/api";

export const getSocialAccounts = () => async (dispatch: Dispatch<Action>) => {
    try {
        let socialAccounts = await apiCall(
            "get",
            "/api/oauth/accounts/getStreams"
        );
        dispatch({ type: LOAD_SOCIAL_ACCOUNTS, socialAccounts });
    } catch (error) {
        console.log(error.response);
    }
};
