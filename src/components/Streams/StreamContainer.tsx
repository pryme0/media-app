import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { DRAWER_WIDTH, STREAM_NAV_WIDTH } from "../Layout/styles/constants";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // background: "#F6F7FB",
        position: "fixed",
        right: 0,

        width: `calc(100% - ${DRAWER_WIDTH}px - 180px)`,
        [theme.breakpoints.down("sm")]: {
            width: `calc(100% - 180px)`,
        },
    },
    header: {
        borderBottom: "0.3px solid #dad5d5",
        padding: theme.spacing(1),
        backgroundColor: "#F6F7FB",
        "& h6": {
            fontWeight: 800,
            fontSize: "1rem",
        },
    },
    body: {
        height: "calc(100vh - 6.9rem - 50px)",
        overflowY: "auto",
        padding: theme.spacing(3, 0, 3, 3),
    },
}));

interface Props {
    children: React.ReactNode;
}

const StreamContainer = ({ children }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant="h6">Home Feed</Typography>
            </div>
            <div className={classes.body}>{children}</div>
        </div>
    );
};

export default StreamContainer;
