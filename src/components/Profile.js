import React from 'react';
import CateCon_for_profile from './CateCOn_profile';
import Base_Header from '../Hooks/Base_header'
import CateCon from './CateCon';


export default class profilePage extends React.Component {
	render() {
		return (
			<div>
				<div className="main_profile_page">
					<ProfileCard />
					<div className = "trans">
					<Transaction />
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
							pro_pic : data.pro_img,
							Earnings : data.Earnings
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
			pro_pic : null,
			Earnings : null
		};
	}

	render() {
		return (
			<div id="ProfileCard">
				<div className="info">
					<div className="user_pro_pic">
						<img id = "pro_pic" src = {this.state.pro_pic} alt = " " />
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
											email: document.getElementById('input_email').value,
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
						Username
						{this.state.edited ? (
							<input type="text" className="heading_value " value={this.state.username} />
						) : (
							<div className="heading_value">{this.state.username}</div>
						)}
					</div>
					<div className="heading">
						Email
						<div className="heading_value">
							{this.state.edited ? (
								<input type="text" className="heading_value input_email" id="input_email" />
							) : (
								<div className="heading_value">{this.state.email}</div>
							)}
						</div>
					</div>
					<div className="heading">
						Phone No.
						<div className="heading_value">
							{this.state.edited ? (
								<input type="text" className="heading_value " id="input_phone_Number" />
							) : (
								<div className="heading_value">{this.state.phone_Number}</div>
							)}
						</div>
					</div>
					<div className="heading">
						Address
						<div className="heading_value">
							{this.state.edited ? (
								<input type="text" className="heading_value input_Address" id="input_Address" />
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

class Transaction extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			total_trans : []
		}

		fetch('/api/user/transaction', {
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
				if(data){
					this.setState(() => {
						return {
						 total_trans : data.reverse()
						}
					})
				}
			})

	}

	render(){
		return (
			<div className = "transaction">
			<h1>Transactions({this.state.total_trans.length})</h1>
			<h3>Latest Transaction</h3>
			<div className = "trans_details">
						<div className = "trans_date">Date</div>
						<div className = "trans_transaction">Transaction ID</div>
						<div className = "trans_product_head">Product</div>
						 <div className = "trans_Value_head">Value</div>
						</div>
			{this.state.total_trans.map((trans) => {
				return(
					<div className = "trans_details">
						<div className = "trans_date">2020-06-13</div>
						<div className = "trans_transaction">{trans.TransactionId}</div>
						<div className = "trans_product">{trans.item.BookName}</div>
						<div className = "trans_Value">{trans.Debited ? (<div className = "trans_minus">
							-{trans.Value} coins
							</div>) : (<div className = "trans_plus"> +{trans.Value}coins</div>)}</div>

					</div>
				)
			})}

				{this.state.total_trans.map((trans) => {
					return (
						<div className = "trans_details_mob">
						<div className = "trans_product_mob">{trans.item.BookName}</div>
						<div className = "trans_row">
						<div className = "trans_Value_mob">{trans.Debited ? (<div className = "trans_minus_mob">
						-{trans.Value}coins
						</div>) : (<div className = "trans_plus"> +{trans.Value}coins</div>)}</div>
						<div className = "trans_date_mob">2020-06-13</div>
						</div>
						</div>
					)
				})}
		
			</div>
		)
	}
}




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
