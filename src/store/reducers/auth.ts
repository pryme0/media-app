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
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.user).length,
                user: action?.user,
            };
        case LOGOUT:
            localStorage.clear();
            return { ...state, user: {} };
        default:
            return state;
    }
};

// export default authReducer;
