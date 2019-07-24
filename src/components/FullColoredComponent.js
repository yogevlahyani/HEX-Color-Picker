import React from 'react';

const FullColoredComponent = ({ color, className }) => (
	<div className={className} style={{ backgroundColor: color }} />
);

export default FullColoredComponent;