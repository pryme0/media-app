import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Moment from 'react-moment';

import { Swiper, SwiperSlide } from 'swiper/react';
import userImage from '../../../../../assets/images/user-profile.jpg';
import postImage from '../../../../../assets/images/long.jpg';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { FixMeLater } from '../../../../../types';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const useStyles = makeStyles((theme) => ({
	paper: {
		marginBottom: theme.spacing(5),
	},
	container: {
		maxWidth: '700px',
		border: '.3px solid rgba(0,0,0,.2)',
	},
	header: {
		padding: theme.spacing(1, 2),
		alignItems: 'center',
		'& .text-grid-item': {
			flex: 1,
			marginLeft: theme.spacing(1),
		},
		'& .user-handle': {
			fontSize: '.93rem',
			fontWeight: 700,
			color: 'rgb(38, 38, 38)',
		},
		'& .location': {
			fontSize: '.85rem',
		},
		'& .user-avatar': {
			height: '45px',
			width: '45px',
		},
	},
	body: {
		'& .image': {
			width: '100%',
			height: 'auto',
			margin: 0,
			'& img': {
				width: '100%',
				height: 'auto',
				objectFit: 'cover',
			},
		},
		'& .swiper-button-disabled': {
			display: 'none',
		},
		'& .swiper-button-prev:after, & .swiper-container-rtl .swiper-button-next:after, & .swiper-button-next:after,  & .swiper-container-rtl .swiper-button-prev:after': {
			background: 'white',
			borderRadius: '50%',
			fontSize: '1rem',
			fontWeight: 900,
			padding: '.8rem',
			color: 'rgb(127 118 118)',
			height: '30px',
			width: '30px',
			display: 'grid',
			placeContent: 'center',
			boxShadow: '1px 0px 3px #b9aeae',
		},
	},
	reactions: {
		padding: theme.spacing(0, 2),
		paddingBottom: theme.spacing(1),
		'& .caption': {
			fontSize: '.88rem',
		},
		'& .view-comments-btn': {
			fontSize: '.88rem',
			outline: 0,
			border: 'none',
			background: 'transparent',
			cursor: 'pointer',
			width: '100%',
			textAlign: 'start',
			display: 'block',
			color: '#8e8e8e',
			padding: theme.spacing(0.5, 0),
			margin: theme.spacing(0.5, 0),
		},
		'& .comments': {
			'& > *': {
				fontSize: '.88rem',
			},
			'& .sample-comment': {
				margin: theme.spacing(0.5, 0),
			},
		},
		'& .bold': {
			fontWeight: 600,
			color: 'rgba(38, 38, 38, .8)',
		},
		'& .post-time': {
			fontWeight: 500,
			color: 'rgba(38, 38, 38, .8)',
			textTransform: 'uppercase',
			fontSize: '.75rem',
		},
	},
	likeCount: {
		alignItems: 'center',
		padding: theme.spacing(0.8, 0),
		'& .avatar': {
			width: '25px',
			height: '25px',
		},
		'& .text-grid-item': {
			flex: 1,
			marginLeft: theme.spacing(1),
		},
		'& .like-text': {
			fontSize: '.88rem',
			color: 'rgb(38, 38, 38)',
		},
	},
}));

interface IProps {
	stream: FixMeLater;
}

const Post = ({ stream }: IProps) => {
	const classes = useStyles();
	const { username, media_url, caption, timestamp } = stream;
	const calendarStrings = {
		nextDay: '[Tomorrow at] LT',
		sameDay: 'H[h]',
		lastDay: '[Yesterday at] LT',
		lastWeek: '[last] ddd [at] LT',
		nextWeek: 'ddd [at] LT',
		sameElse: 'D MMM YY',
	};

	return (
		<Paper elevation={1} className={classes.paper}>
			<div className={classes.container}>
				<Grid container className={classes.header}>
					<Grid item>
						<Avatar className="user-avatar" src={userImage} />
					</Grid>
					<Grid className="text-grid-item">
						<Typography variant="h5" className="user-handle">
							{username}
						</Typography>
						<Typography className="location" variant="h6">
							{/* Kubwa, Abuja */}
						</Typography>
					</Grid>
				</Grid>
				<div className={classes.body}>
					<Swiper
						// spaceBetween={50}
						slidesPerView={1}
						navigation
						// slidesPerView="auto"
						// pagination={{ clickable: true }}
						// scrollbar={{ draggable: true }}
					>
						<SwiperSlide style={{ width: '100%' }}>
							<figure className="image">
								<img src={media_url} alt="" />
							</figure>
						</SwiperSlide>
						{/* <SwiperSlide style={{ width: '100%' }}>
							<figure className="image">
								<img src={postImage} alt="" />
							</figure>
						</SwiperSlide>
						<SwiperSlide style={{ width: '100%' }}>
							<figure className="image">
								<img src={userImage} alt="" />
							</figure>
						</SwiperSlide>
    <SwiperSlide style={{ width: '100%' }}>Slide 3</SwiperSlide> */}
					</Swiper>

					<div className={classes.reactions}>
						<Grid container className={classes.likeCount}>
							<Grid item>
								<Avatar className="avatar" src={userImage} />
							</Grid>
							<Grid item className="text-grid-item">
								<Typography className="like-text" variant="h5">
									Liked by <span className="bold">Mullarae</span> and <span className="bold">120,029 others</span>
								</Typography>
							</Grid>
						</Grid>
						<Typography className="caption" variant="h5">
							<span className="bold">{caption}</span>
						</Typography>

						<div className="comments">
							{/* <button className="view-comments-btn">View all 2,368 comments</button>
							<Typography className="sample-comment" variant="h5">
								<span className="bold">godwinzzi</span> On love africa🔥🔥🔥
							</Typography>
							<Typography className="sample-comment" variant="h5">
								<span className="bold">jiibolamarshalgram</span> 🔥❤️🔥
							</Typography> */}
							<h4>
								<time className="post-time" dateTime="2008-02-14 20:00">
									<Moment calendar={calendarStrings}>{timestamp}</Moment>
								</time>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</Paper>
	);
};

export default Post;
