import {
    Grid,
    Paper,
    makeStyles,
    Avatar,
    Typography,
    IconButton,
    Checkbox,
    FormControlLabel,
} from "@material-ui/core";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testProfileImage from "../../../../assets/images/user-profile.jpg";
import { faComment, faRetweet } from "@fortawesome/free-solid-svg-icons";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "700px",
        padding: theme.spacing(3, 0, 1, 3),
        "& .tweet-grid": {
            flexWrap: "nowrap",
        },
        "& .tweet-text-grid": {
            flex: 1,
            paddingLeft: theme.spacing(2),
            "& .link": {
                color: "#4116ff!important",
                textDecoration: "none",
                "&:hover": {
                    textDecoration: "underline",
                },
            },
            "& .tweet-caption": {
                fontSize: ".9rem!important",
                fontWeight: "500",
                padding: theme.spacing(1, 0),
                display: "block",
                lineHeight: "1.8em",
                color: "#535355",
            },
            "& .user-info-grid": {
                alignItems: "center",
            },
        },
        "& .tweet-avatar": {
            width: "50px",
            height: "50px",
        },
        "& .username": {
            fontWeight: "700",
            fontSize: "1rem",
        },
        "& .user-handle": {
            fontWeight: 500,
            fontSize: "1rem",
            padding: theme.spacing(0, 1),
            color: "#86868a",
        },
        "& .tweet-time": {
            fontWeight: "500",
            fontSize: "1rem",
            color: "#86868a",
        },
        "& .dot": {
            fontWeight: 600,
            padding: theme.spacing(0, 0.5),
        },
        "& .icons-grid": {
            maxWidth: "300px",
            justifyContent: "space-between",
            "& .icon": {
                fontSize: "1.2rem",
            },
            "& .MuiFormControlLabel-label": {
                fontSize: "1rem",
            },
        },
    },
}));

interface Props {}

const Post = (props: Props) => {
    const classes = useStyles();
    const tweetTextRef = useRef(null);

    useEffect(() => {
        (tweetTextRef.current as any).innerHTML = (tweetTextRef.current as any).innerHTML.replace(
            /(http:\/\/[^\s]+)/g && /(https:\/\/[^\s]+)/g,
            '<a target="_blank" className="link" href="$1">$1</a>'
        );
    }, [tweetTextRef]);

    return (
        <Paper elevation={2}>
            <div className={classes.container}>
                <Grid container className="tweet-grid">
                    <Grid item>
                        <Avatar
                            className="tweet-avatar"
                            src={testProfileImage}
                            alt="user profile"
                        />
                    </Grid>
                    <Grid item className="tweet-text-grid">
                        <Grid container className="user-info-grid">
                            <Grid item>
                                <Typography className="username" variant="h6">
                                    Santos Bright
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    className="user-handle"
                                    variant="h6"
                                >
                                    @devSantosBright
                                </Typography>
                            </Grid>
                            <span className="dot">.</span>
                            <Grid item>
                                <Typography className="tweet-time" variant="h5">
                                    19h
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography
                            ref={tweetTextRef}
                            className="tweet-caption"
                            variant="caption"
                        >
                            Python Snake code to transform an image by using
                            https://gist.github.com/svpino/be7ba9b873216e18079dab183e86b37c
                            go to
                            http://gist.github.com/svpino/be7ba9b873216e18079dab183e86b37c
                        </Typography>
                        <Grid container className="icons-grid">
                            <Grid item className="comments">
                                <IconButton>
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faComment}
                                    />
                                </IconButton>
                                <span className="count">11</span>
                            </Grid>
                            <Grid item className="reweets">
                                <IconButton>
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={faRetweet}
                                    />
                                </IconButton>
                                <span className="count">11</span>
                            </Grid>
                            <Grid item className="likes">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={
                                                <FavoriteBorder className="icon" />
                                            }
                                            checkedIcon={
                                                <Favorite className="icon" />
                                            }
                                            name="checkedH"
                                        />
                                    }
                                    label={77}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    );
};

export default Post;
