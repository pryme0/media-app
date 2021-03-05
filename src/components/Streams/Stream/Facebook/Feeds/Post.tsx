import { faCheckCircle, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper, Grid, Typography, Avatar, FormControlLabel, Checkbox, makeStyles, Theme } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import React from 'react';
import Moment from 'react-moment';
import userImage from '../../../../../assets/images/user-profile.jpg';
import likeIcon from '../../../../../assets/icons/facebook/like.svg';
import { FixMeLater } from '../../../../../types';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		'& .post-header': {
			padding: theme.spacing(2, 2, 1),
			alignItems: 'flex-start',
			flexWrap: 'no-wrap',
			'& .text-grid-item': {
				paddingLeft: theme.spacing(1),
			},
		},
		'& .post-user-avatar': {
			width: '45px',
			height: '45px',
		},
		'& .username': {
			fontWeight: '600',
			fontSize: '1rem',
			lineHeight: 1,
		},
		'& .time-info': {
			fontSize: '.95rem',
		},
		'& .post-caption': {
			padding: theme.spacing(0, 2),
			wordBreak: 'break-word',
			fontSize: '.95rem',
			fontWeight: 500,
		},
	},
	container: {
		maxWidth: '44rem',
	},
	verifiedIcon: {
		color: '#258AFF',
	},
}));

interface IProps {
	post: FixMeLater;
}

const Post = ({ post }: IProps) => {
	const classes = useStyles();
	const calendarStrings = {
		nextDay: '[Tomorrow at] LT',
		sameDay: 'H[h]',
		lastDay: '[Yesterday at] LT',
		lastWeek: '[last] ddd [at] LT',
		nextWeek: 'ddd [at] LT',
		sameElse: 'D MMM YY',
	};

	let { comments, likes, message, created_time } = post;

	return (
		<Paper elevation={4} className={classes.root}>
			<div className={classes.container}>
				<Grid container className="post-header">
					<Grid item>
						<Avatar className="post-user-avatar" src={userImage} alt="facebook user profile image" />
					</Grid>
					<Grid item className="text-grid-item">
						<Typography variant="h6" className="username">
							Santos Bright <FontAwesomeIcon className={classes.verifiedIcon} icon={faCheckCircle} />
						</Typography>
						<Typography variant="h6" className="time-info">
							{/* <span className="time"> */}
							<Moment calendar={calendarStrings}>{created_time}</Moment>
							{/* </span> */}
							<span className="dot">.</span>
							<span className="emoji">🌎</span>
						</Typography>
					</Grid>
				</Grid>
				<Typography variant="h6" className="post-caption">
					{message}
				</Typography>
				<div className="post-footer">
					<Grid container className="reaction-counts">
						<Grid className="likesIconCount" item>
							<span className="like-icon">
								<img src={likeIcon} alt="facebook like" height="18" width="18" />
							</span>
							<span className="reaction-count">{likes.summary.total_count}</span>
						</Grid>
						<Grid item>
							<span className="reaction-count">{comments.summary.total_count} Comments</span>
							<span className="reaction-count">47 Shares</span>
						</Grid>
					</Grid>
					<Grid container className="reaction-actions">
						<Grid item>
							<FormControlLabel
								control={<Checkbox icon={<FontAwesomeIcon icon={faThumbsUp} />} checkedIcon={<img />} name="checkedH" />}
								label="Like"
							/>
						</Grid>
						<Grid item>
							<FormControlLabel
								control={<Checkbox icon={<FontAwesomeIcon icon={faThumbsUp} />} checkedIcon={<img />} name="checkedH" />}
								label="Comment"
							/>
						</Grid>
						<Grid item>
							<FormControlLabel
								control={<Checkbox icon={<FontAwesomeIcon icon={faThumbsUp} />} checkedIcon={<img />} name="checkedH" />}
								label="Share"
							/>
						</Grid>
					</Grid>
				</div>
			</div>
		</Paper>
	);
};

export default Post;
