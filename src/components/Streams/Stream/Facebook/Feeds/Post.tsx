import {
    faCheckCircle,
    faThumbsDown,
    faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
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
import likeIcon from "../../../../../assets/icons/facebook/like.svg";
import { FixMeLater } from "../../../../../types";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: "fit-content",
        marginBottom: "1rem",
        paddingBottom: ".5rem",
        "& .post-header": {
            padding: theme.spacing(2, 2, 1),
            alignItems: "flex-start",
            flexWrap: "no-wrap",
            "& .text-grid-item": {
                paddingLeft: theme.spacing(1),
            },
        },
        "& .post-user-avatar": {
            width: "45px",
            height: "45px",
        },
        "& .username": {
            fontWeight: "600",
            fontSize: "1rem",
            lineHeight: 1,
        },
        "& .time-info": {
            fontSize: ".95rem",
        },
        "& .post-caption": {
            padding: theme.spacing(0, 2),
            wordBreak: "break-word",
            fontSize: "1.6rem",
            fontWeight: 500,
        },
    },
    container: {
        maxWidth: "44rem",
    },
    verifiedIcon: {
        color: "#258AFF",
    },
    postFooter: {
        padding: theme.spacing(0, 2),
        "& .reaction-counts": {
            padding: theme.spacing(0.7, 0),
            "& .reaction-count": {
                fontSize: "1rem",
                lineHeight: "100%",
                padding: theme.spacing(0, 1),
            },
            "& > *": {
                flex: 1,
            },
            "& .likesIconCount": {
                display: "flex",
                alignItems: "center",
                "& .likesCount": {
                    display: "flex",
                    alignItems: "center",
                },
            },
            "& .commentShareCount": {
                textAlign: "end",
            },
        },
    },
    reactionActions: {
        padding: theme.spacing(0.4, 0),
        borderTop: ".2px solid rgba(0, 0, 0, .2)",
        borderBottom: ".2px solid rgba(0, 0, 0, .2)",
        "& .reaction": {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: ".2rem",
            "&:hover": {
                backgroundColor: "rgb(234 234 234 / 80%)",
            },
            "& .MuiFormControlLabel-root > .MuiButtonBase-root": {
                padding: "5px",
            },
            "& .MuiFormControlLabel-root": {
                margin: 0,
            },
        },
    },
}));

interface IProps {
    post: FixMeLater;
}

const Post = ({ post }: IProps) => {
    const classes = useStyles();
    let { comments, likes, message } = post;

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
                            Santos Bright{" "}
                            <FontAwesomeIcon
                                className={classes.verifiedIcon}
                                icon={faCheckCircle}
                            />
                        </Typography>
                        <Typography variant="h6" className="time-info">
                            <span className="time">Febuary 19 at 6:10 PM</span>
                            <span className="dot">.</span>
                            <span className="emoji">🌎</span>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="h6" className="post-caption">
                    {message}
                </Typography>
                <div className={classes.postFooter}>
                    <Grid container className="reaction-counts">
                        <Grid className="likesIconCount" item>
                            <span className="like-icon">
                                <img
                                    src={likeIcon}
                                    alt="facebook like"
                                    height="18"
                                    width="18"
                                />
                            </span>
                            <span className="reaction-count">223K</span>
                        </Grid>
                        <Grid item>
                            <span className="reaction-count">271 Comments</span>
                            <span className="reaction-count">47 Shares</span>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.reactionActions}>
                        <Grid item className="reaction">
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
                        <Grid item className="reaction">
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
                                label="Comment"
                            />
                        </Grid>
                        <Grid item className="reaction">
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
                                label="Share"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Paper>
    );
};

export default Post;
