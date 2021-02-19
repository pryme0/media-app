import { useState } from "react";
import { Paper, Grid, Avatar, Typography, Button } from "@material-ui/core";
import useStyles from "./FollowerCard.styles";
import userAvatar from "../../../../../../assets/images/user-profile.jpg";

interface Props {}

const FollowerCard = (props: Props) => {
    const classes = useStyles();
    const [isUnfollow, setUnfollow] = useState(false);

    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid container>
                <Grid item className="content-grid-item">
                    <Grid container className="info-container">
                        <Grid item>
                            <Avatar
                                className="user-avatar"
                                src={userAvatar}
                                alt={"user avatar"}
                            />
                        </Grid>
                        <Grid item className="info-text-item">
                            <Grid container style={{ alignItems: "center" }}>
                                <Grid item className="info-grid-item">
                                    <Typography
                                        className="username"
                                        variant="h5"
                                    >
                                        Oj Theuliosa
                                    </Typography>
                                    <Grid container className="badge-grid">
                                        <Grid item>
                                            <Typography
                                                className="screen-name"
                                                variant="h6"
                                            >
                                                @Oj Theuliosa
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <div className="badge">
                                                Follows you
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item className="button-grid-item">
                                    {/* <Button
                                        className="follow-btn"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        Follow
                                    </Button> */}
                                    <Button
                                        disableElevation
                                        className={`following-btn ${
                                            isUnfollow && "unfollow-btn"
                                        }`}
                                        variant="contained"
                                        color="primary"
                                        onMouseEnter={() => setUnfollow(true)}
                                        onMouseLeave={() => setUnfollow(false)}
                                    >
                                        {isUnfollow ? "Unfollow" : "Following"}
                                    </Button>
                                </Grid>
                            </Grid>
                            <Typography className="user-bio" variant="caption">
                                I’m Theophilus, a friend of God/Information
                                Scientist/Igala by tribe/Single Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Tempore, quasi?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FollowerCard;
