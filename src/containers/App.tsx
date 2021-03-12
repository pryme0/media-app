import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import DashboardRoute from '../components/DashboardRoute/DashboardRoute';
import Index from '../components/Index/Index';
import Streams from './Streams';
import FlashMessage from '../components/FlashMessage/FlashMessage';
import ConnectSocialStep from '../components/ConnectSocial/ConnectSocialStep';
import withAuth from '../HOCS/withAuth';
import Logout from './Logout';

function App() {
	const [loggedOut, setLoggedOut] = useState(false);

	return (
		<BrowserRouter>
			<FlashMessage />
			<Switch>
				<Route exact path="/signin" component={Auth} />
				<Route exact path="/signup" render={() => <Auth isSignup={true} />} />
				<DashboardRoute exact component={Index} path="/" />
				<DashboardRoute exact component={Streams} path="/streams" />
				<Route exact path="/connect-social-one" component={ConnectSocialStep} />
				<Route exact component={Logout} path="/logout" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
