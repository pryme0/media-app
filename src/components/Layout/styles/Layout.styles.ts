import { fade, makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH, APPBAR_COLOR, SIDEBAR_WIDTH } from "./constants";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        fontSize: "20px",
    },
    drawerContainer: {},
    appBar: {
        background: APPBAR_COLOR,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appToolbarMain: {
        minHeight: "35px !important",
        // justifyContent: "space-between",
    },
    appToolbar: {
        paddingRight: SIDEBAR_WIDTH,
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: "nowrap",
        backgroundColor: "#02040F",
    },
    drawerOpen: {
        width: DRAWER_WIDTH,
        color: "white",
        background: APPBAR_COLOR,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        background: APPBAR_COLOR,
        color: "white",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    drawerToggle: {
        color: "white",
        outline: "none!important",
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        // padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        minHeight: "35px !important",
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
    },
    listIcon: {
        color: "white",
        // minWidth: "45px",
        // fontSize: "2rem",
        "& svg": {
            fontSize: "2.7rem",
            color: "white",
        },
    },
    listIconText: {
        "& span": {
            fontSize: "1.5rem",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        // marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            // marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: "0",
        top: 0,
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        "&:focus": {
            width: "30ch!important",
        },
        fontSize: "1.2rem",
        padding: theme.spacing(0, 0, 0, 3),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    logo: {
        padding: "1rem 0 5rem 1.3rem",
    },
    // sidebar
    sidebar: {
        width: SIDEBAR_WIDTH,
        flexShrink: 0,

        whiteSpace: "nowrap",
    },
    rightContent: {
        display: "flex",
        marginLeft: "auto",
    },
    iconButton: {
        backgroundColor: "white",
        minWidth: "auto !important",
        marginRight: theme.spacing(1),
        // padding: `6px ${theme.spacing(1)}px`,
    },
    sidebarDrawerPaper: {
        width: SIDEBAR_WIDTH,
        // flexShrink: 0,
    },
    sideListItemIcon: {
        minWidth: "auto !important",
    },
    navLink: {
        color: "white",
        "&:hover, &:focus": {
            textDecoration: "none",
            color: "white",
        },
        "& .MuiListItem-button:hover": {
            backgroundColor: "#262628e0",
        },
    },
    activeNavLink: {
        "& .MuiListItem-button": {
            backgroundColor: "#3b3b3de0",
        },
    },
}));
