import { Grid, Paper, makeStyles, Avatar, Typography, IconButton, Checkbox, FormControlLabel } from '@material-ui/core';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import testProfileImage from '../../../../assets/images/user-profile.jpg';
import { faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Moment from 'react-moment';
import useStyles from '../../styles/Post.styles';
import { FixMeLater } from '../../../../../../types';

interface Props {
	tweet: FixMeLater;
	socialAccount: FixMeLater;
	toggleFavorite: (tweetStrId: string, favorited: boolean) => void;
	toggleRetweet: (tweetStrId: string, favorited: boolean) => void;
}

const Timeline = ({ tweet, socialAccount, toggleFavorite, toggleRetweet }: Props) => {
	const classes = useStyles();
	const tweetTextRef = useRef(null);
	const calendarStrings = {
		nextDay: '[Tomorrow at] LT',
		sameDay: 'H[h]',
		lastDay: '[Yesterday at] LT',
		lastWeek: '[last] ddd [at] LT',
		nextWeek: 'ddd [at] LT',
		sameElse: 'D MMM YY',
	};

	let { created_at, entities, favorite_count, favorited, id, id_str, retweet_count, retweeted, retweeted_status, user, text } = tweet;
	let { name, profile_image, profile_image_url_https, screen_name, description, verified, following } = user;

	useEffect(() => {
		(tweetTextRef.current as any).innerHTML = (tweetTextRef.current as any).innerHTML.replace(
			/(http:\/\/[^\s]+)/g && /(https:\/\/[^\s]+)/g,
			'<a target="_blank" className="link" href="$1">$1</a>'
		);
	}, [tweetTextRef]);

	return (
		<Paper elevation={1} className={classes.paper}>
			<div className={classes.container}>
				<Grid container className="tweet-grid">
					<Grid item>
						<Avatar className="tweet-avatar" src={profile_image || profile_image_url_https} alt="user profile" />
					</Grid>
					<Grid item className="tweet-text-grid">
						<Grid container className="user-info-grid">
							<Grid item>
								<Typography className="username" variant="h6">
									{name}
								</Typography>
							</Grid>
							<Grid item>
								<Typography className="user-handle" variant="h6">
									@{screen_name}
								</Typography>
							</Grid>
							<span className="dot">.</span>
							<Grid item>
								<Typography className="tweet-time" variant="h5">
									<Moment calendar={calendarStrings}>{created_at}</Moment>
								</Typography>
							</Grid>
						</Grid>
						<Typography ref={tweetTextRef} className="tweet-caption" variant="caption">
							{text}
						</Typography>
						<Grid container className="icons-grid">
							<Grid item className="comments">
								<IconButton>
									<FontAwesomeIcon className="icon" icon={faComment} />
								</IconButton>
								<span className="count">11</span>
							</Grid>
							<Grid item className="reweets">
								<FormControlLabel
									onClick={() => toggleRetweet(id_str, retweeted)}
									checked={retweeted}
									control={
										<Checkbox
											icon={<FontAwesomeIcon className="icon" icon={faRetweet} />}
											checkedIcon={<FontAwesomeIcon style={{ color: 'green' }} className="icon" icon={faRetweet} />}
											name="checkedH"
										/>
									}
									label={retweet_count}
								/>
							</Grid>
							<Grid item className="likes">
								<FormControlLabel
									onClick={() => toggleFavorite(id_str, favorited)}
									checked={favorited}
									control={
										<Checkbox icon={<FavoriteBorder className="icon" />} checkedIcon={<Favorite className="icon" />} name="checkedH" />
									}
									label={retweeted_status ? retweeted_status.favorite_count : favorite_count}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Paper>
	);
};

export default Timeline;
