import { Action, Dispatch } from "redux";
import { AUTH } from "../actionTypes";
// import * as api from "../api/index.js";

export const signin = (formData: any, history: any) => async (
    dispatch: Dispatch<Action>
) => {
    try {
        history.push("/");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData: any, history: any) => async (
    dispatch: Dispatch<Action>
) => {
    try {
        history.push("/");
    } catch (error) {
        console.log(error);
    }
};
