import React from 'react';
import homePage from './HomePage';
import pblogo from './';

const Header = () => {
	return (
		<div className="header_cont">
			<img src={pblogo} alt=" " />
			<span>PuraniBooks</span>
			<span>.com</span>
		</div>
	);
};

export default Header;
