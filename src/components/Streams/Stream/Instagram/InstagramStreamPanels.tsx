import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { FixMeLater } from '../../../../types';
import HomeTimeline from './Streams/HomeFeed';
import { getInstagramFeeds } from '../../../../services/instagramStream';
import Schedule from './Streams/Schedule';

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

const InstagramStreamPanels = ({ value, socialAccount }: Props) => {
	let [currentStream, setCurrentStream] = React.useState<FixMeLater>([]);
	console.log(socialAccount);

	useEffect(() => {
		getInstagramFeeds(socialAccount.accountId)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<>
			<TabPanel value={value} index={0}>
				<HomeTimeline />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Schedule />
			</TabPanel>
		</>
	);
};

export default InstagramStreamPanels;
