import React from 'react';
// import ReactDOM from 'react-dom'
import HomePage from '../containers/HomePage';
import Productbox from '../components/Productbox';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import AddProPage from '../containers/AddProPage';
import profilePage from '../components/Profile';
import MyCart from '../components/MyCart';
import Header from '../components/Header';
import Library from '../containers/Library';

const Apiroute = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/sell-your-product" component={AddProPage} exact={true} />
				<Route path="/container" component={Productbox} exact={true} />
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/productpage" component={ProductPage} exact={true} />
				<Route path="/My-Library" component={Library} exact={true} />
				<Route path="/myprofile" component={profilePage} />
				<Route path="/myCart" component={MyCart} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Apiroute;
