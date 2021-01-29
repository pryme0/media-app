import { AUTH, LOGOUT } from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {},
};

interface IState {
    isAuthenticated: boolean;
    user: {};
}

export default (state: IState = DEFAULT_STATE, action: any) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem(
                "accessToken",
                JSON.stringify(action.accessToken)
            );
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.user).length,
                authData: action?.data,
            };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
};

// export default authReducer;
