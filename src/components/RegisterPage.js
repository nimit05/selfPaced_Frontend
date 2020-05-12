import React from 'react';

export default class Register extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div className = "regis_page">
			<div className = "regis_main">
			<div className = "regis_cont">
			<div className = "regis_subcont">
			<div className = "regis_subcont2">
		 <Header />
		 <SignUp />
		 <NewUser />
			</div>
			</div>
			</div>
			</div>
			</div>
		);
	}
}

const Header = () => {
	return (
		<div>
		<div className = "register_title_btn">
		<button className = "register_title" >PuraniBooks<b className = "com">.com</b></button>
		</div>
		<h2 className = "regis_subtitle">
		Register 
		</h2>
		</div>
	)
} 

const SignUp = () => {
	return (
		<div>
			
		<form>
		<label for = "name">Name</label>
		<input placeholder="Name" type="text" id="name" name="name" />
		<label for = "username">Username</label>
		<input placeholder="Username" type="text" id="username" name="username" />
		<label for ="email">Email</label>
		<input placeholder="Email" type="email" id="email" name="email" />
		<label for = "password">Password</label>
		<input placeholder="Password" type="password" id="password" name="password" />
		<label for = "phone_Number">Mobile No.</label>
		<input placeholder="Mobile No." type="number" id="phone_Number" name="phone_Number" />
		<label for = "Address">Address</label>
		<input placeholder="Address" type="text" id="Address" name="Address" />
		<div className = "divbtn">
		<button className = "regis_btn">Submit</button>
		</div>
		</form>
	</div>
);
	
}

const NewUser = () => {
	return(
  <div className = "bottom ">
 Already have an account? <a className= "sign" href="#">Sign in</a> 
  </div>

	)
}
