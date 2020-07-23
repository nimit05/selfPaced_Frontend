import React from 'react';
import CateCon_for_profile from './CateCOn_profile';
import Base_Header from '../Hooks/Base_header';
import CateCon from './CateCon';
import propic from '../img/propic.svg';
import {Line} from 'react-chartjs-2';
import edit from '../img/edit.svg'

export default class Profile extends React.Component {

	handleMode = (ans) => {

		this.setState(() => {
			return{
				mode : ans
			}
		})
	}

	constructor(props){
		super(props)

		fetch('/api/user').then((res) => res.json())
		.then((data) => {
			if(data){
				this.setState(() => {
					return{
						pro_img : data.pro_img,
						username : data.username
					}
				})
			}
		})

		this.state = {
			pro_img : null,
			username : null,
			mode : 'details'
		}
	}
	render() {
		return (
			<div className = "profile_page" >
				<div className = "profile_cont" >
					<div className="info">
						<div className="user_pro_pic">
							<img id="pro_pic" src={this.state.pro_pic ? this.state.pro_pic : propic} alt=" " />
						</div>
						<div className="user_name">
							Nimit Wadhwa
						</div>
					</div>
					<div className = "profile_mode">
						<div className = {this.state.mode === 'details' ? "pink" :"mode_head"} onClick = {() =>this.handleMode('details')} >
							My Profile
						</div>
						<div className = {this.state.mode === 'my_pro' ? "pink" :"mode_head"} onClick = { () =>this.handleMode('my_pro')}>
							My Products
						</div>
						<div className = {this.state.mode === 'trans' ? "pink" :"mode_head"} onClick = { () => this.handleMode('trans')}>
							My Transactions
						</div>
						<div className = {this.state.mode === 'earnings' ? "pink" :"mode_head"} onClick = { () => this.handleMode('earnings')}>
							My Earnings
						</div>
					</div>
				</div>
				<div className = "profile_right_cont">
				{this.state.mode === 'trans' && (
					<Transaction />
					)}
					
					{this.state.mode === 'details' && (
						<ProfileCard />
						)}	
					{this.state.mode === 'my_pro' && (
						<Items_Cont />
							)}
					{this.state.mode === 'earnings' && (
						<Graph />
					)}		
				</div>
			</div>
		)
	}
}

class ProfileCard extends React.Component {
	constructor(props) {
		super(props);

		fetch('/api/user')
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
			Earnings: null,
			edit_ed : true,
			edit_p : true,
			edit_c : true
		};
	}

	render() {
		return (
			<div className="ProfileCard">
				<div className = "details_head">
					My Profile
				</div>
				<div className = "details_subhead">
					<div>Personal Details :	</div>
						<div className = "det_edit"onClick = {() => {
							this.setState((prevState) => {
								return{
									edit_p : !prevState.edit_p
								}
							})
						}}> 
							<div>
								{this.state.edit_p ? (<div>
									Edit
									</div>) :
									 <div>
									 	Save
									 </div> }
							</div>
							<div>
								{this.state.edit_p && <img src = {edit} /> }
							</div>
						</div>
				</div>

				<div className = "details_row">
					<div className = "row_cont">
						<div className = "details_lab">Username</div>
					
						{this.state.edit_p ? 
							(<div className = "details_value">{this.state.username}</div>) :
							(<div className = "details_value">
								<input type="text" defaultValue = {this.state.username} />
							</div>) 
						
								}
					</div>
					<div className = "row_cont">
						<div className = "details_lab">Name</div>
						{this.state.edit_p ? 
							(<div className = "details_value">{this.state.name}</div>) :
							(<div className = "details_value">
								<input type="text" defaultValue = {this.state.name} />
							</div>) 
						
								}
					</div>
				</div>
				<div className = "details_row">
				<div className = "row_cont_bio">
					<div className = "details_lab">Bio</div>
					{this.state.edit_p ?
					(<div className = "details_value">Lorem Ipsum is simply dummy text of the 
					printing and typesetting industry. Lorem Ipsum has been the industry's sta
					ndard dummy text ever since the 1500s, when an unknown printer took a galle
					</div>) :
					(<div className = "details_value"><textarea /> </div>) }
				</div>
				</div>
				<div className = "details_subhead">
					<div>Education Details :	</div>
						<div className = "det_edit" onClick = {() => {
							this.setState((prevState) => {
								return{
									edit_ed : !prevState.edit_ed
								}
							})
						}}> 
							<div>
								{this.state.edit_ed ? (<div>
									Edit
									</div>) :
									 <div>
									 	Save
									 </div> }
							</div>
							<div>
								{this.state.edit_ed && <img src = {edit} /> }
							</div>
						</div>
				</div>
					<div className = "details_row">
					<div className = "row_cont">
						<div className = "details_lab">College</div>
						<div className = "details_value_email">DCRUST,Murthal</div>
					</div>
					<div className = "row_cont">
						<div className = "details_lab">Qualification</div>
						<div className = "details_value">Electrical Engineer</div>
					</div>
				</div>

				<div className = "details_subhead">
					<div>Contact Details :	</div>
						<div className = "det_edit" onClick = {() => {
							this.setState((prevState) => {
								return{
									edit_c : !prevState.edit_c
								}
							})
						}}> 
							<div>
								{this.state.edit_c ? (<div>
									Edit
									</div>) :
									 <div>
									 	Save
									 </div> }
							</div>
							<div>
								{this.state.edit_c && <img src = {edit} /> }
							</div>
						</div>
				</div>
				<div className = "details_row">
					<div className = "row_cont">
						<div className = "details_lab">Email</div>
						{this.state.edit_c ? 
							(<div className = "details_value">{this.state.email}</div>) :
							(<div className = "details_value">
								<input type="text" defaultValue = {this.state.email} />
							</div>) 
						
								}
					</div>
					<div className = "row_cont">
						<div className = "details_lab">Phone No.</div>
						{this.state.edit_c ? 
							(<div className = "details_value">{this.state.phone_Number}</div>) :
							(<div className = "details_value">
								<input type="text" defaultValue = {this.state.phone_Number} />
							</div>) 
						
								}					
								</div>
				</div>
				<div className = "details_row">
					<div className = "row_cont">
						<div className = "details_lab">Address</div>
						{this.state.edit_c ? 
							(<div className = "details_value">{this.state.Address}</div>) :
							(<div className = "details_value">
								<input type="text" defaultValue = {this.state.Address} />
							</div>) 
						
								}
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
	constructor(props) {
		super(props);

		this.state = {
			total_trans: []
		};

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
				if (data) {
					this.setState(() => {
						return {
							total_trans: data.reverse()
						};
					});
				}
			});
	}

	render() {
		return (
			<div className="transaction">
				<h1>Transactions({this.state.total_trans.length})</h1>
				<h3>Latest Transaction</h3>
				<div className="trans_details">
					<div className="trans_date">Date</div>
					<div className="trans_product_head">Product</div>
					<div className="trans_Value_head">Value</div>
				</div>
				{this.state.total_trans.map((trans) => {
					return (
						<div className="trans_details">
							<div className="trans_date">2020-06-13</div>
							<div className="trans_product">{trans.item.title}</div>
							<div className="trans_Value">
								{trans.Debited ? (
									<div className="trans_minus">-{trans.Value} coins</div>
								) : (
									<div className="trans_plus"> +{trans.Value}coins</div>
								)}
							</div>
						</div>
					);
				})}

				{this.state.total_trans.map((trans) => {
					return (
						<div className="trans_details_mob">
							<div className="trans_product_mob">{trans.item.title}</div>
							<div className="trans_row">
								<div className="trans_Value_mob">
									{trans.Debited ? (
										<div className="trans_minus_mob">-{trans.Value}coins</div>
									) : (
										<div className="trans_plus"> +{trans.Value}coins</div>
									)}
								</div>
								<div className="trans_date_mob">2020-06-13</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

class Graph extends React.Component {
	render(){
		let data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'My First dataset',
				// backgroundColor: ',
				borderColor: '#34866B',
				data: [0, 10, 5, 2, 20, 30, 45]
			}]
		}
		return(
			<div className = "graph_cont">
				<div className = "graph" >
					<Line data = {data} options={{ maintainAspectRatio: true }} />
				</div>
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
