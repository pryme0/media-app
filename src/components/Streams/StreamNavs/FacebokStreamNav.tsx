import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles/StreamNav.styles";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import TabPanel from "../Tabs/TabPanel";
import { FixMeLater } from "../../../types";

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const links = [
    { icon: faHome, text: "Home Feeds", to: "/" },
    { icon: faTwitter, text: "User Feeds", to: "/" },
];

interface IProps {
    value: number;
    socialAccount: FixMeLater;
    setStream: React.Dispatch<React.SetStateAction<string>>;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

function StreamNav({ value, setValue, setStream, socialAccount }: IProps) {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Fragment>
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
                                size="2x"
                                icon={tab.icon}
                            />
                        }
                        label={tab.text}
                        className={classes.tabItem}
                        {...a11yProps(tab.text)}
                    />
                ))}
            </Tabs>
        </Fragment>
    );
}

export default StreamNav;
