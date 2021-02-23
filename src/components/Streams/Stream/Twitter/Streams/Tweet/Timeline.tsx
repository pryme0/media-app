import { Grid, Paper, makeStyles, Avatar, Typography, IconButton, Checkbox, FormControlLabel } from '@material-ui/core';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import testProfileImage from '../../../../assets/images/user-profile.jpg';
import { faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
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
	let { id, id_str, text, entities, user, created_at, retweet_count, favorite_count, favorited, retweeted, retweeted_status } = tweet;
	let { name, profile_image_url_https, screen_name } = user;

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
						<Avatar className="tweet-avatar" src={profile_image_url_https} alt="user profile" />
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
									{created_at}
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
									onClick={() =>
										toggleRetweet(
											retweeted_status ? retweeted_status.id_str : id_str,
											retweeted_status ? retweeted_status.retweeted : retweeted
										)
									}
									checked={retweeted_status ? retweeted_status.retweeted : retweeted}
									control={
										<Checkbox
											icon={<FontAwesomeIcon className="icon" icon={faRetweet} />}
											checkedIcon={<FontAwesomeIcon style={{ color: 'green' }} className="icon" icon={faRetweet} />}
											name="checkedH"
										/>
									}
									label={retweeted_status ? retweeted_status.retweet_count : retweet_count}
								/>
							</Grid>
							<Grid item className="likes">
								<FormControlLabel
									onClick={() => toggleFavorite(id_str, retweeted_status ? retweeted_status.favorited : favorited)}
									checked={retweeted_status ? retweeted_status.favorited : favorited}
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
