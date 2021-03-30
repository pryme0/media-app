import React, { useRef, useState } from 'react';
import TwitterLogin from 'react-twitter-login';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { Button, CircularProgress, FormControlLabel, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';
import { Form, useFormikContext } from 'formik';
import Input from './Input';
import CheckboxInput from './CheckboxInput';
import useStyles from './styles';
import { FixMeLater } from '../../types';

interface Props {
	isSignup?: boolean;
}
interface IEnv {
	REACT_APP_CLIENT_ID: string;
	REACT_APP_TWITTER_CONSUMER_KEY: string;
	REACT_APP_TWITTER_CONSUMER_SECRET: string;
	REACT_APP_FB_CLIENT_ID: string;
}

const AuthForm = ({ isSignup }: Props) => {
	const classes = useStyles();
	const history = useHistory();
	const { resetForm, isSubmitting } = useFormikContext() ?? {};
	const [showPassword, setShowPassword] = useState<boolean>(false);

	// console.log('Twitter key', (process.env as any).REACT_APP_TWITTER_CONSUMER_KEY);

	const handleShowPassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	const googleAuth = (googleUser: FixMeLater) => {
		console.log(googleUser);
		googleUser.disconnect();
		//use idToken for server side verification
	};

	const facebookAuth = (res: FixMeLater) => {
		console.log(res);
	};

	const twitterAuth = (err: FixMeLater, twitterUser: FixMeLater) => {
		console.log('ERROR ', err);
		console.log('TwitterUser ', twitterUser);
	};

	const handleFailure = (res: FixMeLater) => {
		console.log('failed', res);
	};

	const clicked = () => console.log('Component clicked');

	history.listen(() => resetForm());

	return (
		<Form className={classes.form}>
			<Grid container spacing={2}>
				{isSignup && (
					<>
						<Input name="firstName" label="First Name" type="text" autoFocus half />
						<Input name="lastName" label="Last Name" half />
					</>
				)}
				<Input name="email" label="Email Address" type="email" />
				<Input name="password" label="Password" type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
				{isSignup && <Input name="confirmPassword" label="Repeat Password" type="password" />}
			</Grid>
			{!isSignup ? (
				<Grid container justify="space-between">
					<CheckboxInput color="primary" name="rememberMe" label="Remember Me" />
					<Button component={Link} to="/forgot_password" className={classes.linkButton}>
						Forgot Password
					</Button>
				</Grid>
			) : (
				<Grid container justify="flex-end">
					<CheckboxInput
						color="primary"
						name="agreeToTerms"
						label={
							<span className={classes.label}>
								Agree to The <Link to="terms-and-privacy">Terms and privacy of service</Link>
							</span>
						}
						className={classes.remember}
					/>
				</Grid>
			)}
			<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
				{isSubmitting ? (
					<CircularProgress style={{ height: '1.5rem', width: '1.5rem' }} color="inherit" />
				) : (
					<span>{isSignup ? 'Sign Up' : 'Sign In'}</span>
				)}
			</Button>
			{isSignup ? (
				<div>
					<GoogleLogin
						clientId={(process.env as any).REACT_APP_CLIENT_ID}
						buttonText="Signup with Google"
						onSuccess={googleAuth}
						onFailure={handleFailure}
						cookiePolicy={'single_host_origin'}
					></GoogleLogin>
					<TwitterLogin
						authCallback={twitterAuth}
						// consumerKey={(process.env as any).REACT_APP_TWITTER_CONSUMER_KEY}
						// consumerSecret={(process.env as any).REACT_APP_TWITTER_CONSUMER_SECRET}
						consumerKey="rsZL428YCAylfLCMWalPcq9gj"
						consumerSecret="VT1YpoG0ZCtEAOCHd2EfOQPn9Bn7m3DbUJolzFXAmlnIzseZrs"
						buttonTheme="dark_short"
					/>
					<FacebookLogin
						appId="352156315974504"
						autoLoad={true}
						fields="name,email,picture"
						onClick={clicked}
						callback={facebookAuth}
						icon="fa-facebook"
						size="small"
						scope="public_profile, email, user_birthday"
						textButton="Signup With FacebooK"
					/>
				</div>
			) : (
				<div>
					<GoogleLogin
						clientId={(process.env as any).REACT_APP_CLIENT_ID}
						buttonText="Signin with Google"
						onSuccess={googleAuth}
						onFailure={handleFailure}
						cookiePolicy={'single_host_origin'}
					></GoogleLogin>
					<TwitterLogin
						authCallback={twitterAuth}
						// consumerKey={(process.env as any).REACT_APP_TWITTER_CONSUMER_KEY}
						// consumerSecret={(process.env as any).REACT_APP_TWITTER_CONSUMER_SECRET}
						consumerKey="dehNS2Y53A2cusFs9zZwAVxKG"
						consumerSecret="T4XlbhNlCLgyyiY53gUn9LvZKuOpppZwaX2t1y69I6zKmu9NU0"
						buttonTheme="light_short"
					/>
					<FacebookLogin
						appId="352156315974504"
						autoLoad={true}
						fields="name,email,picture"
						onClick={clicked}
						callback={facebookAuth}
						icon="fa-facebook"
						size="small"
						scope="public_profile, email, user_birthday"
						textButton="Signin With FacebooK"
					/>
				</div>
			)}
			<Button component={Link} to={isSignup ? 'signin' : 'signup'} className={classes.linkButton}>
				{isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
			</Button>
		</Form>
	);
};

export default AuthForm;
