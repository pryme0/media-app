import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import DashboardRoute from '../components/DashboardRoute/DashboardRoute';
import Index from '../components/Index/Index';
import Streams from './Streams';
import FlashMessage from '../components/FlashMessage/FlashMessage';
import withAuth from '../HOCS/withAuth';
import ForgetPassword from '../components/Auth/ForgetPassword';
import ResetPassword from '../components/Auth/ResetPassword';
import Logout from './Logout';

function App() {
	return (
		<BrowserRouter>
			<FlashMessage />
			<Switch>
				<Route exact path="/signin" component={Auth} />
				<Route exact path="/signup" render={() => <Auth isSignup={true} />} />
				<Route exact path="/forgot_password" component={ForgetPassword} />
				<Route exact path="/reset_password/:id" component={ResetPassword} />
				<DashboardRoute exact component={Index} path="/" />
				<DashboardRoute exact component={Streams} path="/streams" />
				<Route exact component={Logout} path="/logout" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
