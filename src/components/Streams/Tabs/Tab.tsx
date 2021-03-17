import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { makeStyles, Typography, Tab, Avatar, withStyles, Theme, createStyles, IconButton } from '@material-ui/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FixMeLater } from '../../../types';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	iconButton: {
		marginLeft: theme.spacing(1),
	},
	profileImage: {
		marginRight: theme.spacing(1),
		position: 'relative',
		paddingLeft: theme.spacing(1),
	},
	socialIcon: {
		position: 'absolute',
		bottom: -8,
		right: -10,
	},
}));

interface IProfileProps {
	image: string;
	alt?: string;
	icon: FixMeLater;
}

const ProfileImageIcon = ({ image, alt, icon }: IProfileProps) => {
	const classes = useStyles();
	return (
		<figure className={classes.profileImage}>
			<Avatar src={image} sizes="small" />
			<FontAwesomeIcon className={classes.socialIcon} icon={icon} />
		</figure>
	);
};

function a11yProps(index: any) {
	return {
		id: `wrapped-tab-${index}`,
		'aria-controls': `wrapped-tabpanel-${index}`,
	};
}

interface IStyledTabProps {
	className?: string;
	value: any;
	label: string | JSX.Element;
	icon?: JSX.Element;
}

export const StyledTab = withStyles((theme: Theme) =>
	createStyles({
		root: {
			minHeight: '55px!important',
			padding: theme.spacing(0, 2),
			'& .svg-inline--fa.fa-twitter': { color: '#258AFF !important' },
			'& .svg-inline--fa.fa-facebook': { color: '#258AFF !important' },
		},
	})
)((props: IStyledTabProps) => <Tab {...props} />);

const Label = ({ label }: { label: string }) => {
	const classes = useStyles();

	return (
		<div>
			<span>{label}</span>
			<IconButton className={classes.iconButton}>
				<FontAwesomeIcon icon={faTimes} />
			</IconButton>
		</div>
	);
};

interface ITabProps {
	socialAccount: FixMeLater;
	className?: string;
	value: any;
	icon?: JSX.Element;
}

const TabItem = ({ socialAccount, ...props }: ITabProps) => {
	const classes = useStyles();
	let icon;
	switch (socialAccount.account.accountType.toUpperCase()) {
		case 'TWITTER':
			icon = faTwitter;
			break;
		case 'FACEBOOK':
			icon = faFacebook;
			break;
		case 'INSTAGRAM':
			icon = faInstagram;
			break;
		case 'LINKEDIN':
			icon = faLinkedinIn;
			break;
		default:
			break;
	}
	return (
		<StyledTab
			label={<Label label={socialAccount.account.userName} />}
			icon={<ProfileImageIcon image={socialAccount.account.profileImg} icon={icon} />}
			{...a11yProps(socialAccount._id)}
			{...props}
		/>
	);
};

export default TabItem;
