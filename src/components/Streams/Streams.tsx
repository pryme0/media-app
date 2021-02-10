import React, { useEffect, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Skeleton from '@material-ui/lab/Skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import AppBar from '@material-ui/core/AppBar';
import { connect, useDispatch } from 'react-redux';
import { getSocialAccounts } from '../../store/actions/socialAccounts';
import TabPanel from './Tabs/TabPanel';
import TabItem, { StyledTab } from './Tabs/Tab';
import { useStyles } from './styles';
import AddProfileBar from './AddProfileBar/AddProfileBar';
import Stream from './Stream/Stream';
import { FixMeLater } from '../../types';

function a11yProps(index: any) {
	return {
		id: `wrapped-tab-${index}`,
		'aria-controls': `wrapped-tabpanel-${index}`,
	};
}

interface IProps {
	socialAccounts: FixMeLater[];
	getSocialAccounts: () => any;
}

function Index({ getSocialAccounts, socialAccounts }: IProps) {
	const classes = useStyles();
	const [value, setValue] = React.useState('');
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getSocialAccounts().then((res: FixMeLater) => {
			if (res) {
				setValue(res.socialAccounts[0]._id);
				setLoading(false);
			}
		});
	}, []);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<AddProfileBar />
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
					{isLoading
						? Array.from(new Array(2)).map((item, idx) => (
								<StyledTab
									key={idx}
									value={0}
									className={classes.tab}
									label={<Skeleton style={{ marginLeft: '.5rem' }} height={20} width="50%" />}
									icon={<Skeleton variant="circle" height={40} width={40} />}
								/>
						  ))
						: socialAccounts.map((socialAccount, i) => (
								<TabItem socialAccount={socialAccount} className={classes.tab} value={socialAccount._id} {...a11yProps(socialAccount._id)} />
						  ))}
				</Tabs>
			</AppBar>
			{socialAccounts.map((socialAccount, i) => (
				<TabPanel value={value} key={socialAccount._id} index={socialAccount._id}>
					<Stream socialAccount={socialAccount} />
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
