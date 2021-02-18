import { Box, Typography } from '@material-ui/core';
import { FixMeLater } from '../../../../types';
import HomeTimeline from './Feeds/HomeTimeline';
import Mentions from './Feeds/Mentions';

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
			{value === index && (
				<Box p={0}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

interface Props {
	value: any;
	socialAccount: FixMeLater;
}

const TwitterStreamPanels = ({ value, socialAccount }: Props) => {
	return (
		<>
			<TabPanel value={value} index={0}>
				<HomeTimeline socialAccount={socialAccount} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Mentions socialAccount={socialAccount} />
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
};

export default TwitterStreamPanels;
