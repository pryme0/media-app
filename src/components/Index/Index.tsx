import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartBar,
    faChartLine,
    faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

const Index = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <Typography variant="h2">Main Dashboard</Typography>
                <Typography variant="h6">
                    Welcome <span>Lizzy Onoja</span>, everything looks great!
                </Typography>
            </header>
            <Container className={classes.container} maxWidth="md">
                <div className={classes.row}>
                    <div className={classes.card}>
                        <div className={classes.cardIcon}>
                            <FontAwesomeIcon icon={faChartBar} size="3x" />
                        </div>
                        <Typography className={classes.cardText} variant="h6">
                            Monitor Posts and Mentions
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.cardButton}
                            size="large"
                        >
                            Get Started
                        </Button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.cardIcon}>
                            <FontAwesomeIcon
                                size="3x"
                                icon={faEnvelopeOpenText}
                            />
                        </div>
                        <Typography variant="h6" className={classes.cardText}>
                            Views all Inbox
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.cardButton}
                            size="large"
                        >
                            Get Started
                        </Button>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.cardIcon}>
                            <FontAwesomeIcon icon={faChartLine} size="3x" />
                        </div>
                        <Typography className={classes.cardText} variant="h6">
                            Monitor Engagement
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.cardButton}
                            size="large"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Index;
