import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FollowerCard from './FollowerCard';
import useStyles from './FollowFeed.style';
import { getUserFollowers, getUserFollowing } from '../../../../../../services/twitterStream';
import Loader from '../Loader';
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

interface Props {
	socialAccount: FixMeLater;
}

const FollowersFeed = ({ socialAccount }: Props) => {
	const classes = useStyles();
	const [currentTab, setCurrentTab] = useState(0);
	let [followers, setFollowers] = React.useState<FixMeLater>([]);
	let [following, setFollowing] = React.useState<FixMeLater>([]);
	let [followersLoading, setFollowersLoading] = React.useState<boolean>(true);
	let [followingLoading, setFollowingLoading] = React.useState<boolean>(true);

	useEffect(() => {
		getUserFollowers(socialAccount.accountId)
			.then((result: FixMeLater) => {
				setFollowersLoading(false);
				setFollowers(result.data.users);
			})
			.catch((error) => {
				error.message ? console.log(error.message) : console.log(error);
			});
		getUserFollowing(socialAccount.accountId)
			.then(({ result }: FixMeLater) => {
				setFollowingLoading(false);
				setFollowing(result.users);
			})
			.catch((error) => {
				error.message ? console.log(error.message) : console.log(error);
			});
	}, []);

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
					{followersLoading ? <Loader /> : followers.map((user: FixMeLater) => <FollowerCard user={user} />)}
				</TabPanel>
				<TabPanel value={currentTab} index={1}>
					{followingLoading ? <Loader /> : following.map((user: FixMeLater) => <FollowerCard user={user} />)}
				</TabPanel>
			</div>
		</div>
	);
};

export default FollowersFeed;
