import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import userImage from "../../../../../assets/images/user-profile.jpg";

export const useStyles = makeStyles((theme) => ({
    container: {},
    header: {
        "& .text-grid-item": {
            flex: 1,
        },
        "& .user-handle": {
            fontSize: "1rem",
        },
        "& .location": {
            fontSize: "1rem",
        },
    },
}));

const Post = () => {
    const classes = useStyles();
    return (
        <Paper elevation={1}>
            <div className={classes.container}>
                <Grid container className={classes.header}>
                    <Grid item>
                        <Avatar src={userImage} />
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
            </div>
        </Paper>
    );
};

export default Post;
