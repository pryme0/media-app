import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { FixMeLater } from '../../../types';
// import Tab from "./Tab";

function a11yProps(index: FixMeLater) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`,
	};
}

function LinkTab(props: FixMeLater) {
	return (
		<Tab
			// component="a"
			onClick={(event: FixMeLater) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const TabContainer = () => {
	const classes = {};
	const [value, setValue] = React.useState(0);

	const handleChange = (event: FixMeLater, newValue: FixMeLater) => {
		setValue(newValue);
	};
	return (
		<div>
			<Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
				<LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
				<LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
				<LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
			</Tabs>
		</div>
	);
};

export default TabContainer;
