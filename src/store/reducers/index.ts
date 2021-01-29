import { combineReducers } from "redux";
import auth from "./auth";
import socialAccount from "./socialAccounts";

export default combineReducers({ auth, socialAccount });
