import { useState } from 'react';
import { Paper, makeStyles, Theme, Grid, Avatar, Typography, Button } from '@material-ui/core';
import useStyles from './FollowerCard.styles';
import userAvatar from '../../../../../../assets/images/user-profile.jpg';
import { FixMeLater } from '../../../../../../types';

interface IProps {
	user: FixMeLater;
}

const FollowerCard = ({ user }: IProps) => {
	const classes = useStyles();
	const [isUnfollow, setUnfollow] = useState(false);
	let { name, screen_name, description, following, profile_image_url_https } = user;

	return (
		<Paper elevation={0} className={classes.paper}>
			<Grid container>
				<Grid item className="content-grid-item">
					<Grid container className="info-container">
						<Grid item>
							<Avatar className="user-avatar" src={profile_image_url_https} alt={'user avatar'} />
						</Grid>
						<Grid item className="info-text-item">
							<Grid container style={{ alignItems: 'center' }}>
								<Grid item className="info-grid-item">
									<Typography className="username" variant="h5">
										{name}
									</Typography>
									<Grid container className="badge-grid">
										<Grid item>
											<Typography className="screen-name" variant="h6">
												@{screen_name}
											</Typography>
										</Grid>
										<Grid item>
											<div className="badge">Follows you</div>
										</Grid>
									</Grid>
								</Grid>
								<Grid item className="button-grid-item">
									{following ? (
										<Button
											disableElevation
											className={`following-btn ${isUnfollow && 'unfollow-btn'}`}
											variant="contained"
											color="primary"
											onMouseEnter={() => setUnfollow(true)}
											onMouseLeave={() => setUnfollow(false)}
										>
											{isUnfollow ? 'Unfollow' : 'Following'}
										</Button>
									) : (
										<Button className="follow-btn" variant="outlined" color="primary">
											Follow
										</Button>
									)}
								</Grid>
							</Grid>
							<Typography className="user-bio" variant="caption">
								{description}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default FollowerCard;
