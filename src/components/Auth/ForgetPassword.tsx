import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Paper, Grid, Container, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import logoText from '../../assets/icons/logo-text.svg';
import { Form, Formik, useFormikContext } from 'formik';
import { auth, forgetPassword } from '../../store/actions/auth';
import * as Yup from 'yup';
import Input from './Input';
import useStyles from './styles';

const validationSchema = Yup.object({
	email: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Email is required'),
});
const initialValues = {
	email: '',
};

const ForgetPassword = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const { resetForm, isSubmitting } = useFormikContext() ?? {};

	history.listen(() => resetForm());
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				console.log(values);
				dispatch(forgetPassword(values, history, actions));
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
							Let's Find Your Account
						</Typography>
						<Form className={classes.form}>
							<Grid container spacing={2}>
								<>
									<Input name="email" label="Email" type="text" autoFocus />
								</>
							</Grid>
							<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
								{isSubmitting ? <CircularProgress style={{ height: '1.5rem', width: '1.5rem' }} color="inherit" /> : <span>MAIL ME</span>}
							</Button>
						</Form>
					</Paper>
				</Container>
			</Container>
		</Formik>
	);
};

export default ForgetPassword;
