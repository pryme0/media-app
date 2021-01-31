import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
    },
    heading: {
        fontSize: "16.9px",
        textAlign: "center",
        fontWeight: "bold",
        lineHeight: 4,
    },
    caption: {
        fontSize: "12px",
        textAlign: "center",
        marginBottom: "10px",
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
        "& .makeStyles-remember-38 > .MuiFormControlLabel-label": {
            fontSize: "10px",
        },
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: "5rem",
        background: "#2F80ED",
        "&:hover": {
            background: "#3a8efb",
        },
    },
    linkButton: {
        fontSize: "11px",
        color: "#2F80ED",
    },
    googleButton: {
        marginBottom: theme.spacing(2),
    },
    remember: {
        fontSize: "10px",
    },
    label: {
        "& a": {
            color: "#2F80ED",
            textDecoration: "none",
        },
    },
    backButton: {
        marginTop: theme.spacing(4),
        "& a": {
            textDecoration: "none",
            color: "#2F80ED",   
        },
    },
    backIcon: {
        marginRight: theme.spacing(1),
    },
}));
