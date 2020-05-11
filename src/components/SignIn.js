import React from 'react';
import { Button } from 'react-bootstrap';

export default class SignIN extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="SignIn">
				<Button>hllo</Button>
				<form>
					<label for="username">
						<b>Username</b>
					</label>

					<input type="text" name="username" />

					<label for="password">
						<b>Password</b>
					</label>

					<input type="password" name="password" />
					<div class="psw">
						Forgot <a href="#">password?</a>
					</div>
					<div className="divbtn">
						<button className="lgnbtn">Continue</button>
					</div>
				</form>
			</div>
		);
	}
}
