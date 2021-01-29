import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#e4e4e9 !important",
        padding: theme.spacing(3),
    },
    row: {
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        flexWrap: "wrap",
    },
    container: {
        border: "1px solid black",
        marginTop: theme.spacing(3),
        borderRadius: "0.5rem",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.25)",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        display: "flex",
        flexBasis: "30%",
        padding: theme.spacing(2, 2, 1, 2),
        borderRadius: ".5rem",
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.25)",
        [theme.breakpoints.up("md")]: {
            width: "40%",
        },
    },
    cardIcon: {
        marginBottom: theme.spacing(1),
    },
    cardText: {
        fontWeight: "500",
        color: "black",
        marginBottom: theme.spacing(1),
    },
    cardButton: {
        backgroundColor: "#2F80ED !important",
        outline: "none!important",
        "&:hover": {
            backgroundColor: "#4594ff!important",
        },
    },
}));
