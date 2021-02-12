import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faEnvelopeOpenText,
    faHome,
    faQuidditch,
    faRetweet,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./styles/StreamNav.styles";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const links = [
    { icon: faHome, text: "Home", to: "/" },
    { icon: faTwitter, text: "Mentions", to: "/" },
    { icon: faEnvelopeOpenText, text: "Messages", to: "/" },
    { icon: faUser, text: "Followers", to: "/" },
    { icon: faQuidditch, text: "Tweets", to: "/" },
    { icon: faRetweet, text: "Retweets", to: "/" },
    { icon: faClock, text: "Schedule", to: "/" },
];

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

interface IProps {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

function StreamNav({ value, setValue }: IProps) {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
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
    );
}

export default StreamNav;
