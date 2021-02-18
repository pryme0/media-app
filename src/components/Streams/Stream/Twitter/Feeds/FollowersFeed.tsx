import { useEffect, useState } from "react";
import { Tab, Tabs, Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
    DRAWER_WIDTH,
    STREAM_NAV_WIDTH,
} from "../../../../Layout/styles/constants";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // background: "#F6F7FB",
        position: "fixed",
        right: 0,

        width: `calc(100% - ${DRAWER_WIDTH}px - 180px)`,
        [theme.breakpoints.down("sm")]: {
            width: `calc(100% - 180px)`,
        },
    },
    header: {
        borderBottom: "0.3px solid #dad5d5",
        padding: theme.spacing(1),
        backgroundColor: "#F6F7FB",
        "& h6": {
            fontWeight: 800,
            fontSize: "1rem",
        },
    },
    body: {
        height: "calc(100vh - 6.9rem - 50px)",
        overflowY: "auto",
        padding: theme.spacing(3, 0, 0, 3),
    },
    tab: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function a11yProps(index: any) {
    return {
        id: `nav-tab-${index}`,
        "aria-controls": `nav-tabpanel-${index}`,
    };
}

interface Props {}

const FollowersFeed = (props: Props) => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState<any>(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setCurrentTab(newValue);
    };

    useEffect(() => setCurrentTab("followers"));

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Tabs
                    variant="fullWidth"
                    value={currentTab}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <Tab label="Page One" {...a11yProps("followers")} />
                    <Tab label="Page Two" {...a11yProps("following")} />
                </Tabs>
            </div>
            <div className={classes.body}>
                <TabPanel value={currentTab} index="followers">
                    <h1>Followers</h1>
                </TabPanel>
                <TabPanel value={currentTab} index="following">
                    <h1>Following</h1>
                </TabPanel>
            </div>
        </div>
    );
};

export default FollowersFeed;
