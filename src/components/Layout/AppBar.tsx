import React, { createContext } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import AppNavBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hidden } from "@material-ui/core";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./styles/Layout.styles";
import StyledMenu from "./StyledMenu";
import { FixMeLater } from "../../types";

interface IProps {
    open: boolean;
    mobileOpen: boolean;
    handleMobileOpen: () => void;
}

const ToolbarMain = (props: IProps) => {
    const { open, handleMobileOpen, mobileOpen } = props;
    const classes = useStyles();
    return (
        <Toolbar
            className={clsx(classes.appToolbarMain, {
                [classes.appToolbar]: open,
            })}
        >
            <Hidden mdUp implementation="js">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleMobileOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: mobileOpen,
                    })}
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
            <div className={classes.search}>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                />
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
            </div>
            <div className={classes.rightContent}>
                <StyledMenu className={classes.iconButton} />
                <Button
                    variant="contained"
                    className={classes.iconButton}
                    disableElevation
                >
                    <FontAwesomeIcon icon={faBell} size="2x" />
                </Button>
                <Button
                    variant="contained"
                    className={classes.iconButton}
                    disableElevation
                >
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </Button>
            </div>
        </Toolbar>
    );
};

export const userContext = createContext({});

interface IAppBarProps {
    open: boolean;
    mobileOpen: boolean;
    handleDrawerOpen: () => void;
    handleMobileOpen: () => void;
    user: FixMeLater;
}

const AppBar = (props: IAppBarProps) => {
    const { open, handleMobileOpen, mobileOpen, user } = props;
    const classes = useStyles();
    return (
        <userContext.Provider value={{ username: "Santos Bright" }}>
            <Hidden smDown implementation="js">
                <AppNavBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <ToolbarMain
                        open={open}
                        // handleDrawerOpen={handleDrawerOpen}
                        mobileOpen={mobileOpen}
                        handleMobileOpen={handleMobileOpen}
                    />
                </AppNavBar>
            </Hidden>
            <Hidden mdUp implementation="js">
                <AppNavBar position="fixed" className={clsx(classes.appBar)}>
                    <ToolbarMain
                        open={open}
                        mobileOpen={mobileOpen}
                        handleMobileOpen={handleMobileOpen}
                    />
                </AppNavBar>
            </Hidden>
        </userContext.Provider>
    );
};

const mapStateToProps = (state: FixMeLater) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(AppBar);
