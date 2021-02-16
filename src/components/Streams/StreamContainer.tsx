import { makeStyles, Theme } from "@material-ui/core/styles";
import { DRAWER_WIDTH, STREAM_NAV_WIDTH } from "../Layout/styles/constants";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // background: "#F6F7FB",
        position: "fixed",
        right: 0,
        overflowY: "auto",
        width: `calc(100% - ${DRAWER_WIDTH}px - 180px)`,
        height: "calc(100vh - 6.9rem - 35px)",
        [theme.breakpoints.down("sm")]: {
            width: `calc(100% - 180px)`,
        },
    },
}));

interface Props {
    children: React.ReactNode;
}

const StreamContainer = ({ children }: Props) => {
    const classes = useStyles();

    return <div className={classes.root}>{children}</div>;
};

export default StreamContainer;
