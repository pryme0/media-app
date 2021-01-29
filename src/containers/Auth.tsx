import React from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { Formik, Form, useFormikContext } from "formik";
import AuthForm from "../components/Auth/AuthForm";
import logoText from "../assets/icons/logo-text.svg";
import useStyles from "../components/Auth/styles";

interface Props {
    isSignup?: boolean;
}

const validateForm = (isSignup?: boolean | undefined | null) =>
    Yup.object({
        firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("FirstName is required"),
        lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
        password: isSignup
            ? Yup.string()
                  .min(6, "Password must be at least 6 charaters")
                  .required("Password is required")
            : Yup.string().required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match")
            .required("Confirm password is required"),
    });

const Auth = ({ isSignup }: Props) => {
    const classes = useStyles();

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validateForm(isSignup)}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <img src={logoText} alt="Buzzroom logo" />
                    <Typography className={classes.heading} variant="h3">
                        {isSignup
                            ? "Let's get your account set up"
                            : "Welcome Back"}
                    </Typography>
                    <Typography className={classes.caption} variant="caption">
                        To keep you connected with us please login with your
                        personal information by email address and password
                    </Typography>
                    <Typography variant="h5">
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Typography>
                    <AuthForm isSignup={isSignup} />
                </Paper>
            </Container>
        </Formik>
    );
};

export default Auth;
