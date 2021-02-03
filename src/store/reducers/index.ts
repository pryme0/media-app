import { combineReducers } from "redux";
import { flashMessage } from "redux-flash-messages";
import auth from "./auth";
import socialAccounts from "./socialAccounts";

export default combineReducers({ auth, socialAccounts, flashMessage });
