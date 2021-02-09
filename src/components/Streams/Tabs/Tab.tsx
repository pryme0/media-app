import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { makeStyles, Typography, Tab } from '@material-ui/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FixMeLater } from '../../../types';

interface IProfileProps {
	image: string;
	alt?: string;
	icon: FixMeLater;
}

const ProfileImageIcon = ({ image, alt, icon }: IProfileProps) => {
	return (
		<figure className="image">
			<img src={image} alt={alt} />
			<FontAwesomeIcon icon={icon} />
		</figure>
	);
};

const useStyles = makeStyles((theme) => ({
	tab: {
		height: '40px',
		minWidth: '90px',
		maxWidth: '120px',
		display: 'flex-block',
		// alignItems: "center",
		backgroundColor: '#D9E7FA',
		padding: theme.spacing(0, 2),
	},
}));

function a11yProps(index: any) {
	return {
		id: `wrapped-tab-${index}`,
		'aria-controls': `wrapped-tabpanel-${index}`,
	};
}

interface IProps {
	socialAccount: FixMeLater;
	className?: string;
}

const TabItem = ({ socialAccount, ...props }: IProps) => {
	const classes = useStyles();
	let icon;
	switch (socialAccount.account.accountType) {
		case 'twiiter':
			icon = faTwitter;
			break;
		case 'facebook':
			icon = faFacebook;
			break;
		case 'instagram':
			icon = faInstagram;
			break;
		case 'linkedIn':
			icon = faLinkedinIn;
			break;
		default:
			break;
	}

	return (
		<Tab
			className={classes.tab}
			value={socialAccount._id}
			label={socialAccount.account.userName}
			icon={<ProfileImageIcon image={socialAccount.account.profileImg} icon={icon} />}
			{...a11yProps(socialAccount._id)}
			{...props}
		/>
	);
};

export default TabItem;
