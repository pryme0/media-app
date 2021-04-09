import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { DRAWER_WIDTH, STREAM_NAV_WIDTH } from '../Layout/styles/constants';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { clearCacheData, getCacheData } from '../../services/utils';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		// background: "#F6F7FB",
		position: 'fixed',
		right: 0,

		width: `calc(100% - ${DRAWER_WIDTH}px - 180px)`,
		[theme.breakpoints.down('sm')]: {
			width: `calc(100% - 180px)`,
		},
	},
	header: {
		borderBottom: '0.3px solid #dad5d5',
		padding: theme.spacing(1),
		backgroundColor: '#F6F7FB',
		'& h6': {
			fontWeight: 800,
			fontSize: '1rem',
		},
		display: 'flex',
	},
	body: {
		height: 'calc(100vh - 6.9rem - 50px)',
		overflowY: 'auto',
		padding: theme.spacing(3, 0, 3, 3),
	},
	button: {
		margin: '0',
		padding: '0',
		fontSize: '15px',
		marginLeft: '20px',
	},
}));

interface Props {
	children: React.ReactNode;
	url: string;
	stream: string;
	accountId: string | number;
	setCurrentStream: React.Dispatch<any>;
	setLoading: React.Dispatch<boolean>;
}

const StreamContainer = ({ children, stream, accountId, url, setCurrentStream, setLoading }: Props) => {
	const classes = useStyles();
	const clearCache = () => {
		setLoading(true);
		getCacheData(accountId, url).then((res) => {
			setCurrentStream(res);
			setLoading(false);
		});
	};

	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<Typography variant="h6">{stream}</Typography>
				<div onClick={() => clearCache()}>
					<IconButton className={classes.button}>
						<FontAwesomeIcon icon={faRedoAlt} />
					</IconButton>
				</div>
			</div>
			<div className={classes.body}>{children}</div>
		</div>
	);
};

export default StreamContainer;
