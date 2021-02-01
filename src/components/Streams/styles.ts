import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        padding: "0!important",
    },
    tabs: {
        background: "#fff!important",
    },
    tab: {
        minHeight: "0",
        padding: 0,
        background: "#F6F7FB",
        border: "1px solid #D8D8D8",
        "& > .MuiTab-wrapper": {
            textTransform: "none",
            flexDirection: "row!important",
            fontSize: "1.1rem",
            "& svg": {
                fontSize: "1.3rem",
                marginRight: ".4rem",
                paddingTop: ".2rem",
                lineHeight: "100%",
            },
        },
    },
    tabPanel: {
        "& > .MuiBox-root": {
            padding: 0,
        },
    },
}));
