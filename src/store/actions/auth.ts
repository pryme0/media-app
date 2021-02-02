import { Action, Dispatch } from "redux";
import { apiCall, setAuthorizationToken } from "../../services/api";
import { FixMeLater } from "../../types";
import { AUTH } from "../actionTypes";
// import * as api from "../api/index.js";

export const auth = (
    formData: FixMeLater,
    history: FixMeLater,
    action: string
) => async (dispatch: Dispatch<Action>) => {
    try {
        const isRemember: boolean = formData.rememberMe;
        // delete formData.rememberMe;
        const data: FixMeLater = await apiCall(
            "post",
            `/api/oauth/${action}`,
            formData
        );
        const { accessToken, user } = data;
        if (isRemember || action.toUpperCase() === "SIGNUP") {
            localStorage.setItem("accessToken", accessToken);
        }
        setAuthorizationToken(accessToken);
        dispatch({ type: AUTH, user });
        history.push("/");
    } catch (error) {
        console.log(error.response);
    }
};
