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
import logo from "../../../images/logo/logo.png";
import mainLogo from "../../../images/logo/main-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInbox } from "@fortawesome/free-solid-svg-icons";
import DrawerContent from "./DrawerContent";
import { SwipeableDrawer } from "@material-ui/core";
import { FixMeLater } from "../../types";

interface IProps {
    open?: boolean;
    mobileOpen: boolean;
    handleMobileOpen: () => void;
    handleMobileClose: () => void;
}

const SwipeDrawer = (props: IProps) => {
    const iOS =
        (process as FixMeLater).browser &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);
    const classes = useStyles();
    const theme = useTheme();
    const { open, mobileOpen, handleMobileOpen, handleMobileClose } = props;
    return (
        <SwipeableDrawer
            anchor="left"
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={mobileOpen}
            onClose={handleMobileClose}
            onOpen={handleMobileOpen}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: mobileOpen,
                    [classes.drawerClose]: !mobileOpen,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton
                    className={classes.drawerToggle}
                    onClick={handleMobileClose}
                >
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </div>
            <DrawerContent />
        </SwipeableDrawer>
    );
};

export default SwipeDrawer;
