import React from 'react';
import SignIN from './SignIn';
import NewUser from './NewUser';
import pblogo from '../img/pblogo.png';


export default class LoginPage extends React.Component {
	render() {
		return (
			<div className="loginPage">
				<div className="cont">
					<div className="container2">
						<div className="subcont">
							<Header />
							<SignIN />
						</div>
					</div>
					<NewUser />
				</div>
			</div>
		);
	}
}

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
