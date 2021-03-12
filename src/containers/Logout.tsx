import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Logout = () => {
	const dispatch = useDispatch();
	dispatch({ type: 'LOGOUT' });
	return <Redirect to="/signin" />;
};

export default Logout;
