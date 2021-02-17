import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStyles } from "./styles/StreamNav.styles";
import LoadStream from "./facebookContents/LoadStream";
import TabPanel from "../Tabs/TabPanel";
import { FixMeLater } from "../../../types";

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

interface IProps {
    value: number;
    socialAccount: FixMeLater;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    links: { icon: FixMeLater; text: string; to: string }[];
}

function StreamNav({ value, setValue, links, socialAccount }: IProps) {
    let [stream, setStream] = React.useState<string>("Home Feeds");

    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        switch (newValue) {
            case 0:
                setStream("Home Feeds");
                setValue(newValue);
                break;
            case 1:
                setStream("User Feeds");
                setValue(newValue);
        }
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

            <LoadStream socialAccount={socialAccount} stream={stream} />
        </Fragment>
    );
}

export default StreamNav;
