import React, { useRef, useState } from "react";
import { Button, FormControlLabel, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import { Form, useFormikContext } from "formik";
import Input from "./Input";
import useStyles from "./styles";

interface Props {
    isSignup?: boolean;
}

const AuthForm = ({ isSignup }: Props) => {
    const classes = useStyles();
    const history = useHistory();
    const { resetForm } = useFormikContext() ?? {};
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    history.listen(() => resetForm());

    return (
        <Form className={classes.form}>
            <Grid container spacing={2}>
                {isSignup && (
                    <>
                        <Input
                            name="firstName"
                            label="First Name"
                            type="text"
                            autoFocus
                            half
                        />
                        <Input name="lastName" label="Last Name" half />
                    </>
                )}
                <Input name="email" label="Email Address" type="email" />
                <Input
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    handleShowPassword={handleShowPassword}
                />
                {isSignup && (
                    <Input
                        name="confirmPassword"
                        label="Repeat Password"
                        type="password"
                    />
                )}
            </Grid>
            {!isSignup ? (
                <Grid container justify="space-between">
                    <FormControlLabel
                        className={classes.remember}
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember Me"
                    />
                    <Button
                        component={Link}
                        to="/forgot_password"
                        className={classes.linkButton}
                    >
                        Forgot Password
                    </Button>
                </Grid>
            ) : (
                <Grid container justify="flex-end">
                    <FormControlLabel
                        className={classes.remember}
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={
                            <span className={classes.label}>
                                Agree to The{" "}
                                <Link to="terms-and-privacy">
                                    Terms and privacy of service
                                </Link>
                            </span>
                        }
                    />
                </Grid>
            )}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <Button
                component={Link}
                to={isSignup ? "signin" : "signup"}
                className={classes.linkButton}
            >
                {isSignup
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
            </Button>
        </Form>
    );
};

export default AuthForm;
