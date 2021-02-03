import { Action, Dispatch } from "redux";
import { apiCall, setAuthorizationToken } from "../../services/api";
import { addError } from "redux-flash-messages";
import { FixMeLater } from "../../types";
import { AUTH } from "../actionTypes";
// import * as api from "../api/index.js";

export const auth = (
    formData: FixMeLater,
    history: FixMeLater,
    action: string,
    actions: any
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
        if (action === "login")
            addError({
                text: `Welcome back ${user.firstname}`,
                data: { tree: "house" },
            });
        history.push("/");
    } catch (error) {
        actions.setSubmitting(false);
        addError({
            text: error.response.data.error,
        });
        console.log(error.response);
    }
};
