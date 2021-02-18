import HomeFeed from "./Feeds/HomeFeed";
import TabPanel from "../StreamPanel";
import FollowersFeed from "./Feeds/FollowersFeed";

interface Props {
    value: any;
}

const TwitterStreamPanels = ({ value }: Props) => {
    return (
        <>
            <TabPanel value={value} index={0}>
                <HomeFeed />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h1>Item Two Lorem ipsum dolor sit.</h1>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h1>Item Two Lorem ipsum dolor sit. 3</h1>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FollowersFeed />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <h1>Item Two Lorem ipsum dolor sit Tweets.</h1>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <h1>Item Two Lorem ipsum dolor sit Reweets.</h1>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <h1>Item Two Lorem ipsum dolor sit Scedule.</h1>
            </TabPanel>
        </>
    );
};

export default TwitterStreamPanels;
