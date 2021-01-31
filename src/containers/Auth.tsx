import React from "react";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../store/actions/auth";
import AuthForm from "../components/Auth/AuthForm";
import logoText from "../assets/icons/logo-text.svg";
import useStyles from "../components/Auth/styles";
import { ChevronLeft } from "@material-ui/icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
    isSignup?: boolean;
}

const validateSignup = Yup.object({
    firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("FirstName is required"),
    lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 charaters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Confirm password is required"),
});

const validateLogin = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const initialValuesSignup = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const initialValuesLogin = {
    email: "",
    password: "",
    rememberMe: true,
};

const Auth = ({ isSignup }: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const action = isSignup ? "signup" : "login";

    return (
        <Formik
            initialValues={isSignup ? initialValuesSignup : initialValuesLogin}
            validationSchema={isSignup ? validateSignup : validateLogin}
            onSubmit={(values) => {
                console.log(values);
                dispatch(auth(values, history, action));
            }}
        >
            <Container component="main" maxWidth="lg">
                <Button
                    variant="text"
                    className={classes.backButton}
                    color="primary"
                >
                    <a href="/">
                        <FontAwesomeIcon
                            className={classes.backIcon}
                            icon={faChevronLeft}
                        />
                        Back to home
                    </a>
                </Button>

                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper} elevation={3}>
                        <img src={logoText} alt="Buzzroom logo" />
                        <Typography className={classes.heading} variant="h3">
                            {isSignup
                                ? "Let's get your account set up"
                                : "Welcome Back"}
                        </Typography>
                        <Typography
                            className={classes.caption}
                            variant="caption"
                        >
                            To keep you connected with us please login with your
                            personal information by email address and password
                        </Typography>
                        <Typography variant="h5">
                            {isSignup ? "Sign Up" : "Sign In"}
                        </Typography>
                        <AuthForm isSignup={isSignup} />
                    </Paper>
                </Container>
            </Container>
        </Formik>
    );
};

export default Auth;
