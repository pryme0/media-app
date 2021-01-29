import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./Auth";
import { configureStore } from "../store";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/signin" component={Auth} />
                    <Route
                        exact
                        path="/signup"
                        render={() => <Auth isSignup={true} />}
                    />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
