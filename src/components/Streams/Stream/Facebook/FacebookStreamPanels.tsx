import HomeFeed from "./Feeds/HomeFeed";
import { FixMeLater } from "../../../../types";
import TabPanel from "../StreamPanel";

interface IProps {
    socialAccount: FixMeLater;
    value: number;
}

const FacebookStreamPanels = ({
    socialAccount,
    value,
}: IProps): JSX.Element => (
    <>
        <TabPanel value={value} index={0}>
            <HomeFeed socialAccount={socialAccount} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <h1>Item Two Lorem ipsum dolor sit.</h1>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <h1>Item Two Lorem ipsum dolor sit. 3</h1>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <h1>Item Two Lorem ipsum dolor sit. Followers</h1>
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

export default FacebookStreamPanels;
