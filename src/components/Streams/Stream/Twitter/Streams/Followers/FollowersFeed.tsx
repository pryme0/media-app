import { useState } from 'react';
import { Tab, Tabs, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FollowerCard from './FollowerCard';
import useStyles from './FollowFeed.style';
import { FixMeLater } from '../../../../../../types';

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`followers-tabpanel-${index}`} aria-labelledby={`followers-tab-${index}`} {...other}>
			{value === index && (
				<Box p={0}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		id: `followers-tab-${index}`,
		'aria-controls': `followers-tabpanel-${index}`,
	};
}

interface IProps {
	socialAccount: FixMeLater;
}

const FollowersFeed = ({ socialAccount }: IProps) => {
	const classes = useStyles();
	const [currentTab, setCurrentTab] = useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setCurrentTab(newValue);
	};

	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<Tabs variant="fullWidth" className={classes.tabs} value={currentTab} onChange={handleChange} aria-label="nav tabs example">
					<Tab
						className="tab"
						label={
							<Typography className="heading" variant="h6">
								Followers
							</Typography>
						}
						{...a11yProps(0)}
					/>
					<Tab
						className="tab"
						label={
							<Typography className="heading" variant="h6">
								Following
							</Typography>
						}
						{...a11yProps(1)}
					/>
				</Tabs>
			</div>
			<div className={classes.body}>
				<TabPanel value={currentTab} index={0}>
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
				</TabPanel>
				<TabPanel value={currentTab} index={1}>
					<h1>Following</h1>
				</TabPanel>
			</div>
		</div>
	);
};

export default FollowersFeed;
