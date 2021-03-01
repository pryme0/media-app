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
	toggleRetweet: (tweetStrId: string, retweeted: boolean) => void;
	toggleFavorite: (tweetStrId: string, retweeted: boolean) => void;
}

const Post = ({ tweet, socialAccount, toggleRetweet, toggleFavorite }: Props) => {
	const classes = useStyles();
	const tweetTextRef = useRef(null);

	let { profileImg, userName, name } = socialAccount;
	let { id, id_str, public_metrics, text, entities, source, referenced_tweets } = tweet;
	let { quote_count, like_count, reply_count, retweet_count } = public_metrics;

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
						<Avatar className="tweet-avatar" src={profileImg} alt="user profile" />
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
									@{userName}
								</Typography>
							</Grid>
							<span className="dot">.</span>
							{/* <Grid item>
								<Typography className="tweet-time" variant="h5">
									{created_at}
								</Typography>
							</Grid> */}
						</Grid>
						<Typography ref={tweetTextRef} className="tweet-caption" variant="caption">
							{text}
						</Typography>
						<Grid container className="icons-grid">
							<Grid item className="comments">
								<IconButton>
									<FontAwesomeIcon className="icon" icon={faComment} />
								</IconButton>
								<span className="count">{reply_count}</span>
							</Grid>
							<Grid item className="reweets">
								<IconButton>
									<FontAwesomeIcon className="icon" icon={faRetweet} />
								</IconButton>
								<span className="count">{retweet_count}</span>
							</Grid>
							<Grid item className="likes">
								<FormControlLabel
									control={
										<Checkbox icon={<FavoriteBorder className="icon" />} checkedIcon={<Favorite className="icon" />} name="checkedH" />
									}
									label={like_count}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Paper>
	);
};

export default Post;