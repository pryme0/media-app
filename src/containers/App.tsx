import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Auth from "./Auth";
import { configureStore } from "../store";
import DashboardRoute from "../components/DashboardRoute/DashboardRoute";
import Index from "../components/Index/Index";
import Streams from "../components/Streams/Streams";
import { setAuthorizationToken } from "../services/api";
import { LOGOUT } from "../store/actionTypes";
import FlashMessage from "../components/FlashMessage/FlashMessage";
import ConnectSocialStep from "../components/ConnectSocial/ConnectSocialStep";
import withAuth from "../HOCS/withAuth";

const store = configureStore();

function App() {
    useEffect(() => {
        if (localStorage.accessToken) {
            setAuthorizationToken(localStorage.accessToken);
            try {
                store.dispatch({
                    type: "AUTH",
                    user: jwtDecode(localStorage.accessToken),
                });
            } catch (err) {
                store.dispatch({ type: LOGOUT });
            }
        }
    });

    return (
        <Provider store={store}>
            <BrowserRouter>
                <FlashMessage />
                <Switch>
                    <Route exact path="/signin" component={Auth} />
                    <Route
                        exact
                        path="/signup"
                        render={() => <Auth isSignup={true} />}
                    />
                    <DashboardRoute exact component={Index} path="/" />
                    <DashboardRoute exact component={Streams} path="/streams" />
                    <Route
                        exact
                        path="/connect-social-one"
                        component={ConnectSocialStep}
                    />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
