import React from "react";
import { Route } from "react-router-dom";
import LayoutMain from "../Layout/Main";
import { FixMeLater } from "../../types";

interface IProps {
    component?: FixMeLater;
    exact?: any;
    path: string;
    render?: FixMeLater;
}

const DashboardRoute = ({
    component: Component,
    ...rest
}: IProps): JSX.Element => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <LayoutMain>
                    <Component {...props} />
                </LayoutMain>
            )}
        />
    );
};

export default DashboardRoute;
