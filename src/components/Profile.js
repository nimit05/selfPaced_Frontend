import React from 'react';
import CateCon_for_profile from './CateCOn_profile';
import Base_Header from '../Hooks/Base_header';
import CateCon from './CateCon';
import propic from '../img/propic.svg';

export default class profilePage extends React.Component {
	render() {
		return (
			<div>
				<div className="main_profile_page">
					<ProfileCard />
					<div className="trans">
						<Items_Cont />
					</div>
				</div>

				<Base_Header />
			</div>
		);
	}
}

class ProfileCard extends React.Component {
	constructor(props) {
		super(props);

		fetch('/api/user', {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache',
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer'
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data) {
					this.setState(() => {
						return {
							username: data.username,
							email: data.email,
							phone_Number: data.phone_Number,
							Address: data.Address,
							name: data.name,
							coins: data.Coins,
							pro_pic: data.pro_img,
							Earnings: data.Earnings
						};
					});
				}
			});
		this.state = {
			username: null,
			email: null,
			phone_Number: null,
			Address: null,
			name: null,
			coins: null,
			edited: false,
			pro_pic: null,
			Earnings: null
		};
	}

	render() {
		return (
			<div id="ProfileCard">
				<div className="info">
					<div className="user_pro_pic">
						<img id="pro_pic" src={this.state.pro_pic ? this.state.pro_pic : propic} alt=" " />
					</div>
					<div className="user_name">
						{this.state.name}
						<div>
							{' '}
							{this.state.edited ? (
								<div
									className="edit"
									onClick={() => {
										this.setState(() => {
											return {
												edited: false
											};
										});
										let data = {
											phone_Number: document.getElementById('input_phone_Number').value,
											Address: document.getElementById('input_Address').value
										};

										postData('api/user/', data).then((data) => {
											if (data.email) {
												window.location.reload();
											} else {
												alert('we are having some problem');
											}
										});
									}}
								>
									Save
								</div>
							) : (
								<div
									className="edit"
									onClick={() => {
										this.setState((prevState) => {
											return {
												edited: !prevState.edited
											};
										});
									}}
								>
									Edit Profile
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="hr_pp">
					<hr />
				</div>
				<div className="details">
					<div className="heading">
						<span> Username</span>
						<div className="heading_value">
							<div>{this.state.username}</div>
						</div>
					</div>
					<div className="heading">
						<span>Email</span>
						<div className="heading_value">
							<div className="heading_value">{this.state.email}</div>
						</div>
					</div>
					<div className="heading">
						<span>Phone No.</span>
						<div className="heading_value">
							{this.state.edited ? (
								<input
									type="text"
									className="heading_value "
									id="input_phone_Number"
									defaultValue={this.state.phone_Number}
								/>
							) : (
								<div className="heading_value">{this.state.phone_Number}</div>
							)}
						</div>
					</div>
					<div className="heading">
						<span>Address</span>
						<div className="heading_value">
							{this.state.edited ? (
								<input
									type="text"
									className="heading_value input_Address"
									id="input_Address"
									defaultValue={this.state.Address}
								/>
							) : (
								<div className="heading_value">{this.state.Address}</div>
							)}
						</div>
					</div>
					<div className="heading">
						Wallet
						<div className="heading_value">{this.state.coins} coins</div>
					</div>
					<div className="heading">
						Earnings
						<div className="heading_value">{this.state.Earnings} coins</div>
					</div>
				</div>
			</div>
		);
	}
}

const Items_Cont = () => {
	return (
		<div className="items_cont">
			<CateCon_for_profile />
		</div>
	);
};

async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'PUT', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}
