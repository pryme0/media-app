import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./AppBar";
import { useStyles } from "./styles/Layout.styles";
import Drawer from "./Drawer";
import Sidebar from "./Sidebar";

interface IProps {
    children: React.ReactNode;
}

function Main(props: IProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMobileOpen = () => {
        setMobileOpen(true);
    };

    const handleMobileClose = () => {
        setMobileOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                open={open}
                mobileOpen={mobileOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleMobileOpen={handleMobileOpen}
            />
            <Drawer
                open={open}
                mobileOpen={mobileOpen}
                handleDrawerClose={handleDrawerClose}
                handleMobileClose={handleMobileClose}
                handleMobileOpen={handleMobileOpen}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
            <Sidebar />
        </div>
    );
}

export default Main;
