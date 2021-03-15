import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LayoutMain from '../Layout/Main';
import { FixMeLater } from '../../types';
import store from '../../store/reducers/index';

interface IProps {
	component?: FixMeLater;
	exact?: any;
	path: string;
	render?: FixMeLater;
}

const DashboardRoute = ({ component: Component, ...rest }: IProps): JSX.Element => {
	const isAuthenticated = useSelector((state: FixMeLater) => state.auth.isAuthenticated);
	return isAuthenticated === true ? (
		<Route
			{...rest}
			render={(props) => (
				<LayoutMain>
					<Component {...props} />
				</LayoutMain>
			)}
		/>
	) : (
		<Redirect to="/signin" />
	);
};

export default DashboardRoute;
