import React from "react";
import { Hidden } from "@material-ui/core";
import PermanentDrawer from "./PermanentDrawer";
import SwipeDrawer from "./SwipeDrawer";
import { boolean } from "yup";

interface IProps {
    open: boolean;
    handleDrawerClose: () => void;
    mobileOpen: boolean;
    handleMobileClose: () => void;
    handleMobileOpen: () => void;
}

const DrawerMain = (props: IProps) => {
    const {
        open,
        handleDrawerClose,
        mobileOpen,
        handleMobileClose,
        handleMobileOpen,
    } = props;

    return (
        <>
            <Hidden smDown implementation="js">
                <PermanentDrawer
                    open={true}
                    handleDrawerClose={handleDrawerClose}
                />
            </Hidden>
            <Hidden mdUp implementation="js">
                <SwipeDrawer
                    mobileOpen={mobileOpen}
                    handleMobileClose={handleMobileClose}
                    handleMobileOpen={handleMobileOpen}
                />
            </Hidden>
        </>
    );
};

export default DrawerMain;
