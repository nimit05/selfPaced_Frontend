import React from 'react';
// import ReactDOM from 'react-dom'
import LoginPage from '../components/LoginPage';
import homePage from '../components/HomePage';
import productbox from '../components/container';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<NavLink to="/login">Login</NavLink>
		<NavLink to="/">HomePage</NavLink>
		<NavLink to="/container">Container</NavLink>
	</header>
);

const Apiroute = () => (
	<BrowserRouter>
		<div>
			 <Header /> 
			<Switch>
				<Route path="/login" component={LoginPage} />
				<Route path="/container" component={productbox} />
				<Route path="/" component={homePage} exact={true} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Apiroute;
