import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { configureFlashMessages } from "redux-flash-messages";
import thunk from "redux-thunk";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );

    configureFlashMessages({
        // The dispatch function for the Redux store.
        dispatch: store.dispatch,
    });

    return store;
}
