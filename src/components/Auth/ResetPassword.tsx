import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Paper, Grid, Container, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import logoText from '../../assets/icons/logo-text.svg';
import { Form, Formik, useFormikContext } from 'formik';
import { resetPassword } from '../../store/actions/auth';
import * as Yup from 'yup';
import Input from './Input';
import useStyles from './styles';
import { FixMeLater } from '../../types';

const validationSchema = Yup.object({
	password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Password must match')
		.required('Confirm password is required'),
});
const initialValues = {
	email: '',
};

const ForgetPassword = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const { resetForm, isSubmitting } = useFormikContext() ?? {};
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleShowPassword = () => setShowPassword((prevState) => !prevState);

	history.listen(() => resetForm());
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				console.log(values);
				dispatch(resetPassword(values, history, actions));
			}}
		>
			<Container component="main" maxWidth="lg">
				<Button variant="text" className={classes.backButton} color="primary">
					<a href="/">
						<FontAwesomeIcon className={classes.backIcon} icon={faChevronLeft} />
						Back to home
					</a>
				</Button>
				<Container component="main" maxWidth="xs">
					<Paper className={classes.paper} elevation={3}>
						<img src={logoText} alt="Buzzroom logo" />
						<Typography className={classes.heading} variant="h3">
							Reset Your Password
						</Typography>
						<Form className={classes.form}>
							<Grid container spacing={2}>
								<>
									<Input name="password" label="Password" type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
									<Input name="confirmPassword" label="Repeat Password" type="password" />
								</>
							</Grid>
							<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
								{isSubmitting ? (
									<CircularProgress style={{ height: '1.5rem', width: '1.5rem' }} color="inherit" />
								) : (
									<span>RESET PASSWORD</span>
								)}
							</Button>
						</Form>
					</Paper>
				</Container>
			</Container>
		</Formik>
	);
};

export default ForgetPassword;
