import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: { marginBottom: "1rem", minWidth: "fit-content" },
    container: {
        maxWidth: "700px",
        width: "fit-content",
        minWidth: "600px",
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
