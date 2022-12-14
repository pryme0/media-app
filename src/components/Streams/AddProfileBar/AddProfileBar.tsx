import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './style';
import { FixMeLater } from '../../../types';

function AddProfileBar({ accountId }: FixMeLater) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" elevation={0}>
				<Toolbar>
					<div className={classes.button} onClick={() => {}}>
						<IconButton>
							<FontAwesomeIcon icon={faRedoAlt} />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default AddProfileBar;
