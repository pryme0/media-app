import { Avatar, Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import userImage from "../../../../../assets/images/user-profile.jpg";
import postImage from "../../../../../assets/images/long.jpg";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginBottom: theme.spacing(5),
    },
    container: {
        maxWidth: "700px",
        border: ".3px solid rgba(0,0,0,.2)",
    },
    header: {
        padding: theme.spacing(1, 2),
        alignItems: "center",
        "& .text-grid-item": {
            flex: 1,
            marginLeft: theme.spacing(1),
        },
        "& .user-handle": {
            fontSize: ".93rem",
            fontWeight: 700,
            color: "rgb(38, 38, 38)",
        },
        "& .location": {
            fontSize: ".85rem",
        },
        "& .user-avatar": {
            height: "45px",
            width: "45px",
        },
    },
    body: {
        "& .image": {
            width: "100%",
            height: "auto",
            margin: 0,
            "& img": {
                width: "100%",
                height: "auto",
                objectFit: "cover",
            },
        },
    },
    reactions: {
        padding: theme.spacing(0, 2),
        paddingBottom: theme.spacing(1),
        "& .caption": {
            fontSize: ".88rem",
        },
        "& .view-comments-btn": {
            fontSize: ".88rem",
            outline: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            width: "100%",
            textAlign: "start",
            display: "block",
            color: "#8e8e8e",
            padding: theme.spacing(0.5, 0),
            margin: theme.spacing(0.5, 0),
        },
        "& .comments": {
            "& > *": {
                fontSize: ".88rem",
            },
            "& .sample-comment": {
                margin: theme.spacing(0.5, 0),
            },
        },
        "& .bold": {
            fontWeight: 600,
            color: "rgba(38, 38, 38, .8)",
        },
        "& .post-time": {
            fontWeight: 500,
            color: "rgba(38, 38, 38, .8)",
            textTransform: "uppercase",
            fontSize: ".75rem",
        },
    },
    likeCount: {
        alignItems: "center",
        padding: theme.spacing(0.8, 0),
        "& .avatar": {
            width: "25px",
            height: "25px",
        },
        "& .text-grid-item": {
            flex: 1,
            marginLeft: theme.spacing(1),
        },
        "& .like-text": {
            fontSize: ".88rem",
            color: "rgb(38, 38, 38)",
        },
    },
}));

const Post = () => {
    const classes = useStyles();
    return (
        <Paper elevation={1} className={classes.paper}>
            <div className={classes.container}>
                <Grid container className={classes.header}>
                    <Grid item>
                        <Avatar className="user-avatar" src={userImage} />
                    </Grid>
                    <Grid className="text-grid-item">
                        <Typography variant="h5" className="user-handle">
                            theshopthera
                        </Typography>
                        <Typography className="location" variant="h6">
                            Kubwa, Abuja
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.body}>
                    <figure className="image">
                        <img src={postImage} alt="" />
                    </figure>
                    <div className={classes.reactions}>
                        <Grid container className={classes.likeCount}>
                            <Grid item>
                                <Avatar className="avatar" src={userImage} />
                            </Grid>
                            <Grid item className="text-grid-item">
                                <Typography className="like-text" variant="h5">
                                    Liked by{" "}
                                    <span className="bold">Mullarae</span> and{" "}
                                    <span className="bold">120,029 others</span>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography className="caption" variant="h5">
                            <span className="bold">poco_lee</span> What is yours
                            won’t pass you by!! BELIEVE 💯🇳🇬🦍
                        </Typography>
                        <div className="comments">
                            <button className="view-comments-btn">
                                View all 2,368 comments
                            </button>
                            <Typography className="sample-comment" variant="h5">
                                <span className="bold">godwinzzi</span> On love
                                africa🔥🔥🔥
                            </Typography>
                            <Typography className="sample-comment" variant="h5">
                                <span className="bold">jiibolamarshalgram</span>{" "}
                                🔥❤️🔥
                            </Typography>
                            <h4>
                                <time
                                    className="post-time"
                                    dateTime="2008-02-14 20:00"
                                >
                                    1 day ago
                                </time>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default Post;
