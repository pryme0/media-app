import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { makeStyles, Typography,  } from "@material-ui/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
    tab: {
        height: "40px",
        minWidth: "90px",
        maxWidth: "120px",
        display: "flex-block",
        // alignItems: "center",
        backgroundColor: "#D9E7FA",
        padding: theme.spacing(0, 2),
    },
}));

const Tab = () => {
    const classes = useStyles();

    return (
        <div className={classes.tab}>
            <FontAwesomeIcon
                icon={faTwitter}
                color="#258AFF"
                style={{ marginRight: "4px" }}
            />
            <Typography
                style={{ display: "inline-block", width: "60%" }}
                variant="h6"
            >
                Lizzy brain
            </Typography>
            <FontAwesomeIcon icon={faTimes} />
        </div>
    );
};

export default Tab;
