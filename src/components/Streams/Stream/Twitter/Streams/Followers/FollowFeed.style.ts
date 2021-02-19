import { makeStyles, Theme } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../../../../../Layout/styles/constants";

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
        backgroundColor: "#F6F7FB",
        "& h6": {
            fontWeight: 800,
            fontSize: "1rem",
        },
    },
    body: {
        height: "calc(100vh - 6.9rem - 50px)",
        overflowY: "auto",
        padding: theme.spacing(2, 1, 5, 2),
    },
    tabs: {
        flexGrow: 1,
        "& .tab": {
            padding: theme.spacing(1, 0),
            "&.Mui-selected": {
                backgroundColor: "#ebecec",
            },
            "& .heading": {
                fontWeight: "800!important",
                fontSize: ".8rem!important",
                textTransform: "capitalize",
            },
        },
        "& .MuiTabs-indicator": {
            backgroundColor: "#258AFF!important",
        },
    },
}));

export default useStyles;
