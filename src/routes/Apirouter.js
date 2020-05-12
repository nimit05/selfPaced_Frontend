import React from 'react';
// import ReactDOM from 'react-dom'
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import Productbox from '../components/Productbox';
import Register from '../components/RegisterPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Apiroute = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/login" component={LoginPage} />
				<Route path="/container" component={Productbox} />
				<Route path="/" component={HomePage} exact={true} />
				<Route path = "/register"  component = {Register} />
			</Switch>
			
		</div>
	</BrowserRouter>
);

export default Apiroute;
