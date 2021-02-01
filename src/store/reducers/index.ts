import { combineReducers } from "redux";
import auth from "./auth";
import socialAccounts from "./socialAccounts";

export default combineReducers({ auth, socialAccounts });
