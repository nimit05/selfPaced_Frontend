import React from 'react';

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
		<div>
		<div className = "titlebtn">
		<button className = "titl" >PuraniBooks<b className = "com">.com</b></button>
		</div>
		<h2 className = "subtitle">
		Login 
		</h2>
		</div>
	)
 }

 class SignIN extends React.Component {

	render() {
		return (
			<div className="SignIn">
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
						Forgot <a  className ="pass" href="#">password?</a>
					</div>
					<div className="divbtn">
						<button className="lgnbtn">Continue</button>
					</div>
				</form>
			</div>
		);
	}
}


const NewUser = () => {
    return (
        <div>
        <div className = "new"><b>New to Purani BOOk ?</b></div>
        <button className = "SignUp"><b>Sign Up</b></button>
        </div>
    )
} 


