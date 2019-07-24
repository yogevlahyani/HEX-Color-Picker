import React from 'react';
import Input from "@material-ui/core/Input";

const ColorPickerInput = ({ classNames = [], defaultValue, handleHexColor }) => (
	<div className={classNames.join(' ')}>
		<Input
			value={defaultValue}
			inputProps={{
				'aria-label': 'Description',
			}}
			onChange={event => handleHexColor(event.target.value)}
		/>
	</div>
);

export default ColorPickerInput;
