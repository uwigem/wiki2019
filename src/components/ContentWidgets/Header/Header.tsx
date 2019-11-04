import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';

/**
 * Header is a header text widget
 * 
 * Last Modified
 * Elisa Truong
 * September 1, 2019
 */
export const Header: React.FC<ContentSingularData> = ({ header_content }) => {
	if (!header_content) {
		return <></>;
	}

	return <div className="wi-content-wrapper">
		<h1>{header_content}</h1>
		<div className="header-sep"></div>
	</div>
}
