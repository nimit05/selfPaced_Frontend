import React from 'react';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		this.Signup = this.Signup.bind(this);
	}

	Signup() {
		let name = document.getElementById('name').value;
		let username = document.getElementById('username').value;
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;
		let phone_Number = document.getElementById('phone_Number').value;
		let Address = document.getElementById('Address').value;

		fetch('api/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				user: {
					name: name,
					username: username,
					email: email,
					password: password,
					phone_Number: phone_Number,
					Address: Address
				}
			})
		})
			.then((res) => res.json())
			.then((parJson) => {
				if (parJson.email === email) {
					alert('Registration Complete Now log in ');
				} else if (parJson.errors) {
					alert(parJson.errors.body);
				}
			})
			.catch((error) => {
				alert(error);
			});
	}

	render() {
		return (
			<div>
				<h1>Signup</h1>

				<input placeholder="name" type="text" id="name" name="name" />
				<input placeholder="username" type="text" id="username" name="username" />
				<input placeholder="email" type="eamil" id="email" name="email" />
				<input placeholder="password" type="password" id="password" name="password" />
				<input placeholder="Phone_Number" type="number" id="phone_Number" name="phone_Number" />
				<input placeholder="Address" type="text" id="Address" name="Address" />
				<button onClick={this.Signup}>Submit</button>
			</div>
		);
	}
}
