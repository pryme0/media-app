import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import App from './containers/App';
import { setAuthorizationToken } from './services/api';
import { configureStore } from './store';
import { LOGOUT } from './store/actionTypes';
import './index.css';

const store = configureStore();

try {
	if (localStorage.accessToken) {
		setAuthorizationToken(localStorage.accessToken);
		store.dispatch({
			type: 'AUTH',
			user: jwtDecode(localStorage.accessToken),
		});
	}
} catch (err) {
	store.dispatch({ type: LOGOUT });
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
