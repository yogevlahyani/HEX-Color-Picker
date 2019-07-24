import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	appBar: {
		top: 'auto',
		bottom: 0,
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar />
			</AppBar>
		</div>
	);
};

export default Footer;
