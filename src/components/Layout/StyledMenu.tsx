import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSignOutAlt, faTools, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../images/avatar_test.png';
import { Link } from 'react-router-dom';
import { userContext } from './AppBar';
import { MenuProps } from 'material-ui';

const styles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(2),
		height: theme.spacing(2),
		marginRight: theme.spacing(1),
	},
	arrow: {
		marginLeft: theme.spacing(1),
	},
	listItemText: {
		fontSize: '1.2rem',
		color: '#000 !important',
		'&:hover': {
			textDecoration: 'none !important',
		},
	},
	listIcon: {},
}));

interface IStyleMenuProps extends MenuProps {
	className?: string;
	anchorEl: any;
	keepMounted: boolean;
	open: boolean;
	onClose: () => void;
}

const StyledMenu = withStyles({
	paper: {
		border: '1px solid rgba(0, 0, 0, .7)',
		borderRadius: 0,
		top: '37px !important',
		borderTop: '#233862 4px solid',
		maxHeight: 'none !important',
		minWidth: '180px',
		'& ul': {
			paddingTop: '0 !important',
			paddingBottom: '0 !important',
		},
	},
})((props: IStyleMenuProps) => (
	<Menu
		open={false} //fx later
		elevation={0}
		// style={{ top: "32px" }}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		// {...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		// fontSize: "2rem",
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white,
			},
		},
		'& span': {
			fontSize: '.8rem',
		},
		'& svg': {
			marginLeft: 'auto',
		},
	},
}))(MenuItem);

export default function CustomizedMenus(props: { className: string }) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const classes = styles();
	const user: any = useContext(userContext);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				aria-controls="customized-menu"
				aria-haspopup="true"
				variant="contained"
				onClick={handleClick}
				style={{
					textTransform: 'capitalize',
					color: 'black',
					fontWeight: 'bold',
				}}
				{...props}
			>
				<Avatar
					className={classes.avatar}
					alt={user.firstName + ' ' + user.lastName}
					style={{
						backgroundColor: '#2F80ED',
						fontWeight: 'lighter',
					}}
					src={user.profileImg ? user.profileImg : null}
				>
					{((user.firstName + ' ' + user.lastName) as string)[0].toUpperCase()}
				</Avatar>
				{user.firstName ? user.firstName : user.firstname} {user.lastName ? user.lastName : user.lastname}
				<FontAwesomeIcon icon={faAngleDown} className={classes.arrow} />
			</Button>
			<Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<StyledMenuItem>
					<ListItemText className={classes.listItemText} primary="Profile" />
					<ListItemIcon className={classes.listIcon}>
						<FontAwesomeIcon size="sm" icon={faUser} />
					</ListItemIcon>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText className={classes.listItemText} primary="Settings" />
					<ListItemIcon className={classes.listIcon}>
						<FontAwesomeIcon size="sm" icon={faTools} />
					</ListItemIcon>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText className={classes.listItemText} primary="Help" />
					<ListItemIcon className={classes.listIcon}>
						<FontAwesomeIcon size="sm" icon={faQuestion} />
					</ListItemIcon>
				</StyledMenuItem>
				<Link to="/logout" style={{ textDecoration: 'none !important' }}>
					<StyledMenuItem>
						<ListItemText className={classes.listItemText} primary="Log Out" />
						<ListItemIcon className={classes.listIcon}>
							<FontAwesomeIcon size="sm" icon={faSignOutAlt} />
						</ListItemIcon>
					</StyledMenuItem>
				</Link>
			</Menu>
		</div>
	);
}
