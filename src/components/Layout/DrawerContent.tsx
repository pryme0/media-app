import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import TelegramIcon from "@material-ui/icons/Telegram";
import BarChartIcon from "@material-ui/icons/BarChart";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles/Layout.styles";
import logo from "../../assets/icons/logo-text.svg";
import mainLogo from "../../../images/logo/main-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInbox } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    open?: boolean;
}

const DrawerContent = (props: IProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const { open } = props;

    return (
        <>
            <Divider />
            <div className={classes.logo}>
                <NavLink to="/">
                    <img src={logo} alt="buzzroom logo" width="150" />
                </NavLink>
            </div>
            <Divider />
            <List>
                <NavLink
                    exact
                    to="/"
                    activeClassName={classes.activeNavLink}
                    className={classes.navLink}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Dash Inbox"
                            className={classes.listIconText}
                        />
                    </ListItem>
                </NavLink>
                <NavLink
                    to="/social-inbox"
                    activeClassName={classes.activeNavLink}
                    className={classes.navLink}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <FontAwesomeIcon icon={faInbox} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Social Inbox"
                            className={classes.listIconText}
                        />
                    </ListItem>
                </NavLink>
                <NavLink
                    to="/streams"
                    activeClassName={classes.activeNavLink}
                    className={classes.navLink}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <ViewStreamIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Streams"
                            className={classes.listIconText}
                        />
                    </ListItem>
                </NavLink>
                <NavLink
                    to="/posts"
                    activeClassName={classes.activeNavLink}
                    className={classes.navLink}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Posts"
                            className={classes.listIconText}
                        />
                    </ListItem>
                </NavLink>
                <NavLink
                    to="/publisher"
                    activeClassName={classes.activeNavLink}
                    className={classes.navLink}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <TelegramIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Publisher"
                            className={classes.listIconText}
                        />
                    </ListItem>
                </NavLink>
                <NavLink
                    to="/analytics"
                    activeClassName={classes.activeNavLink}
                    className={classes.navLink}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Analytics"
                            className={classes.listIconText}
                        />
                    </ListItem>
                </NavLink>
                <NavLink
                    to="/post-manager"
                    activeClassName={classes.activeNavLink}
                    className={classes.navLink}
                >
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <FontAwesomeIcon icon={faEdit} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Post Manager"
                            className={classes.listIconText}
                        />
                    </ListItem>
                </NavLink>
            </List>
        </>
    );
};

export default DrawerContent;
