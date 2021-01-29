import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./styles/Layout.styles";

const Sidebar = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Drawer
            className={classes.sidebar}
            variant="permanent"
            classes={{
                paper: classes.sidebarDrawerPaper,
            }}
            anchor="right"
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button>
                        <ListItemIcon className={classes.sideListItemIcon}>
                            <FontAwesomeIcon icon={faEdit} />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.sideListItemIcon}>
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;
