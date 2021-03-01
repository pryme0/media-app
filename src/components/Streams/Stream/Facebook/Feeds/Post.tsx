import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Paper,
    Grid,
    Typography,
    Avatar,
    FormControlLabel,
    Checkbox,
    makeStyles,
    Theme,
} from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import React from "react";
import userImage from "../../../../../assets/images/user-profile.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        "& .post-header": {
            padding: theme.spacing(2),
            alignItems: "flex-start",
            flexWrap: "no-wrap",
            "& .text-grid-item": {
                paddingLeft: theme.spacing(1),
            },
        },
        "& .post-user-avatar": {
            width: "60px",
            height: "60px",
        },
        "& .username": {
            fontWeight: "600",
            fontSize: "1.3rem",
            lineHeight: 1,
        },
        "& .time-info": {
            fontSize: "1.2rem",
        },
        "& .post-caption": {
            padding: theme.spacing(0, 2),
            wordBreak: "break-word",
        },
    },
    container: {
        maxWidth: "44rem",
    },
}));

interface Props {}

const Post = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.root}>
            <div className={classes.container}>
                <Grid container className="post-header">
                    <Grid item>
                        <Avatar
                            className="post-user-avatar"
                            src={userImage}
                            alt="facebook user profile image"
                        />
                    </Grid>
                    <Grid item className="text-grid-item">
                        <Typography variant="h6" className="username">
                            Santos Bright <VerifiedUser />
                        </Typography>
                        <Typography variant="h6" className="time-info">
                            <span className="time">Febuary 19 at 6:10 PM</span>
                            <span className="dot">.</span>
                            <span className="emoji">🌎</span>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="h6" className="post-caption">
                    Are you a Senior Software Engineer living outside the U.S.?
                    Interested in top remote U.S. Software jobs? Sign up for
                    Turing if: \n 1) You can work 40 hours/week with a U.S.
                    software company. 2) You can spend 5 hours in the next week
                    on our programming tests, challenges, and our video
                    interviews. 3) You can adjust work hours to overlap at least
                    4 hours a day with a company in San Francisco/New York. 4)
                    You are an exceptional software engineer, likely in the top
                    1% of the world’s software engineers. 5) You are a fluent
                    English communicator and you wil
                </Typography>
                <div className="post-footer">
                    <Grid container className="reaction-counts"></Grid>
                    <Grid container className="reaction-actions">
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={
                                            <FontAwesomeIcon
                                                icon={faThumbsUp}
                                            />
                                        }
                                        checkedIcon={<img />}
                                        name="checkedH"
                                    />
                                }
                                label="Like"
                            />
                        </Grid>
                        <Grid item></Grid>
                        <Grid item></Grid>
                    </Grid>
                </div>
            </div>
        </Paper>
    );
};

export default Post;
