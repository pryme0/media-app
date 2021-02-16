import { makeStyles } from "@material-ui/core/styles";
import { STREAM_NAV_WIDTH } from "../../constants";

export const useStyles = makeStyles((theme) => ({
    root: {
        background: "#F6F7FB",
        border: "1.3px solid #D8D8D8",
        borderRight: `1px solid ${theme.palette.divider}`,
        maxWidth: `${STREAM_NAV_WIDTH}px`,
        position: "fixed",
        height: "calc(100vh - 6.9rem - 35px)",
    },
    tabs: {
        // height: "100%",
    },
    tabItem: {
        border: "none",
        outline: "none",
        borderBottom: "1.3px solid #D8D8D8",
        display: "flex",
        flexDirection: "column",
        fontSize: ".8rem",
        "&:focus": {
            border: "none!important",
            outline: "none!important",
            textAlign: "center",
        },
        "& > .MuiTab-wrapper": {
            minWidth: "160px!important",
        },
    },
    tabIcon: {
        marginBottom: "1rem",
        fontSize: "1.4em",
    },
    listIconText: {
        color: "rgba(0, 0, 0, .7)",
    },
    navLink: {
        textDecoration: "none !important",
    },
    activeNavLink: {
        color: "#1D293F",
    },
}));
