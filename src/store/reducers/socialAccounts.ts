import {
    ADD_SOCIAL_ACCOUNT,
    DELETE_SOCIAL_ACCOUNT,
    LOAD_SOCIAL_ACCOUNTS,
    GET_SOCIAL_ACCOUNT,
} from "../actionTypes";
import { FixMeLater } from "../../types";

export default (state = [], action: FixMeLater) => {
    switch (action.type) {
        case LOAD_SOCIAL_ACCOUNTS:
            return [...action.socialAccounts];

        case ADD_SOCIAL_ACCOUNT:
            return [...state, action.socialAccount];
        case GET_SOCIAL_ACCOUNT:
            return state.filter(
                (account: FixMeLater) => account.id === action.id
            );
        case DELETE_SOCIAL_ACCOUNT:
            return state.filter(
                (account: FixMeLater) => account.id !== action.id
            );
        default:
            return state;
    }
};
