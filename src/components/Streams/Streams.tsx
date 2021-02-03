import React, { useEffect, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import AppBar from "@material-ui/core/AppBar";
import { connect, useDispatch } from "react-redux";
import { getSocialAccounts } from "../../store/actions/socialAccounts";
import TabPanel from "./Tabs/TabPanel";
import { useStyles } from "./styles";
import AddProfileBar from "./AddProfileBar/AddProfileBar";
import { FixMeLater } from "../../types";

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
}

interface IProps {
    socialAccounts: FixMeLater[];
    getSocialAccounts: () => any;
}

function Index({ getSocialAccounts, socialAccounts }: IProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSocialAccounts().then(() => console.log("Got streams"));
    }, []);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    className={classes.tabs}
                    variant="scrollable"
                    scrollButtons="off"
                    aria-label="scrollable auto tabs example"
                >
                    {socialAccounts.map((socialAccount) => (
                        <Tab
                            key={socialAccount._id}
                            className={classes.tab}
                            label={socialAccount.account.userName}
                            icon={<FontAwesomeIcon icon={faTwitter} />}
                            {...a11yProps(socialAccount._id)}
                        />
                    ))}
                    <Tab label="Item One" {...a11yProps(1)} />
                    <Tab label="Item Two" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <AddProfileBar />
            {socialAccounts.map((socialAccount) => (
                <TabPanel
                    value={socialAccount._id}
                    key={socialAccount._id}
                    index={socialAccount._id}
                >
                    {/* <Stream socialAccount={socialAccount} /> */}
                </TabPanel>
            ))}
        </div>
    );
}

function mapStateToProps(state: FixMeLater) {
    return {
        socialAccounts: state.socialAccounts,
    };
}

function dispatchToProps(dispatch: FixMeLater) {
    return {
        getSocialAccounts: () => dispatch(getSocialAccounts()),
    };
}

export default connect(mapStateToProps, dispatchToProps)(Index);
