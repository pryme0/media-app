import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        padding: theme.spacing(1, 5, 1, 3),
        border: ".3px solid #e1d4d4",
        marginBottom: theme.spacing(1),
        "& .content-grid-item": {
            minWidth: "fit-content",
            flex: 1,
        },
        "& .info-container": {
            alignItems: "center",
            flexWrap: "no-wrap!important",
        },
        "& .info-text-item": {
            paddingLeft: theme.spacing(2),
            flex: 1,
            "& .username": {
                fontSize: "1.2rem",
                lineHeight: "19px",
                letterSpacing: "-0.06em",
                color: "#000",
                fontWeight: "500",
                marginBottom: theme.spacing(1),
            },
            "& .screen-name": {
                fontSize: ".8rem",
                color: "#979797",
            },
            "& .badge-grid": {
                alignItems: "center",
                marginBottom: theme.spacing(0.8),
            },
            "& .badge": {
                backgroundColor: "#E3E2E2",
                fontSize: ".6rem",
                marginLeft: theme.spacing(2),
                padding: theme.spacing(0.4, 0.6),
                color: "#7d7979",
            },
            "& .button-grid-item, & .info-grid-item": {
                flex: 1,
            },
            "& .button-grid-item": {
                "& .follow-btn": {
                    marginLeft: "auto",
                    display: "block",
                    borderRadius: "5rem",
                    color: "#82CBF8",
                    padding: theme.spacing(0.6, 3),
                    fontSize: ".7rem!important",
                    borderColor: "#82CBF8!important",
                },
                "& .following-btn": {
                    marginLeft: "auto",
                    display: "block",
                    borderRadius: "5rem",
                    backgroundColor: "#82CBF8",
                    padding: theme.spacing(0.6, 3),
                    fontSize: ".7rem!important",
                    borderColor: "#82CBF8!important",
                    "&.unfollow-btn": {
                        backgroundColor: "rgb(202, 32, 85)",
                    },
                },
            },
            "& .user-bio": {
                fontSize: "1rem",
                lineHeight: "15px",
                letterSpacing: "-0.02em",

                color: "#4D4D4D",
            },
        },
        "& .user-avatar": {
            width: "5rem",
            height: "5rem",
        },
    },
}));

export default useStyles;
