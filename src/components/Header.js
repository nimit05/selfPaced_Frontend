import React from 'react';
import homePage from './HomePage';
import pblogo from '../img/pblogo.png';

const Header = () => {
	return (
		<div className="header_cont">
			<div className="header_left">
				<img src={pblogo} alt=" " />
				<b>PuraniBooks</b>
				<span>.com</span>
			</div>

			<div className="header_center">
				<span>Get Upto 50% off </span>
			</div>
		</div>
	);
};

export default Header;
