import React, { Dispatch, SetStateAction } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHome } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./styles/StreamNav.styles";

const links = [
    { icon: faHome, text: "Home feed", index: "home-feeds" },
    { icon: faClock, text: "Schedule", index: "schedule" },
];

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

interface IProps {
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
}

function StreamNav({ value, setValue }: IProps) {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
        setValue(newValue);
    };

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={`${classes.tabs} ${classes.root}`}
        >
            {links.map((tab) => (
                <Tab
                    icon={
                        <FontAwesomeIcon
                            className={classes.tabIcon}
                            icon={tab.icon}
                        />
                    }
                    label={tab.text}
                    className={classes.tabItem}
                    {...a11yProps(tab.index)}
                />
            ))}
        </Tabs>
    );
}

export default StreamNav;
