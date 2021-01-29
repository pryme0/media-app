import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "./styles/Layout.styles";
import DrawerContent from "./DrawerContent";

interface IProps {
    open: boolean;
    handleDrawerClose: () => void;
}

const PermanentDrawer = (props: IProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const { open, handleDrawerClose } = props;
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                {/* <IconButton
                    className={classes.drawerToggle}
                    onClick={handleDrawerClose}
                >
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton> */}
            </div>

            <DrawerContent open={open} />
        </Drawer>
    );
};

export default PermanentDrawer;
