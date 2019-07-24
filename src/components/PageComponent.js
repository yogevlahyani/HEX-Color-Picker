import React, { useState } from 'react';
import {makeStyles} from "@material-ui/core";
import ColorPickerInput from './ColorPickerInput';
import FullColoredComponent from "./FullColoredComponent";

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
		flexGrow: 1,
		minHeight: '100vh',
	},
	section: {
		flex: 1,
		padding: 10,
	},
	colorPickerSection: {
		textAlign: 'center',
		paddingTop: 20,
		borderRight: '3px solid #000',
	},
});

const PageComponent = () => {
	const [defaultColor, setColor] = useState('#000000');
	const classes = useStyles();

	const handleHexColor = (color) => {
		if (!color.match(/[0-9a-fA-F]+/) && color !== '#') {
			return;
		}

		if (color.length <= 7) {
			setColor(color);
		}
	};

	return (
		<div className={classes.root}>
			<ColorPickerInput
				classNames={[classes.section, classes.colorPickerSection]}
				defaultValue={defaultColor}
				handleHexColor={handleHexColor}
			/>
			<FullColoredComponent
				className={classes.section}
				color={defaultColor}
			/>
		</div>
	);
};

export default PageComponent;