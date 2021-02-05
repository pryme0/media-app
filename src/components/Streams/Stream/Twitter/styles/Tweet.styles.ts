import { makeStyles } from "@material-ui/core/styles";
import { STREAM_NAV_WIDTH } from "../../../constants";

export const useStyles = makeStyles((theme) => ({
    root: {
        // marginLeft: STREAM_NAV_WIDTH,
        backgroundColor: "#F6F7FB",
        width: "100%",
    },
    twitterContainer: {
        padding: theme.spacing(0, 0, 0, 2),
    },
}));
