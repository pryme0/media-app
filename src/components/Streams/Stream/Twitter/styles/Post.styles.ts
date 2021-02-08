import { makeStyles } from '@material-ui/core/styles';

export const postStyles = makeStyles((theme) => ({
	root: {
		background: '#F6F7FB',
		border: '1.3px solid #D8D8D8',
		borderRight: `1px solid ${theme.palette.divider}`,
	},
}));
