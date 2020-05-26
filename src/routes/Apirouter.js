import React from 'react';
// import ReactDOM from 'react-dom'
import HomePage from '../containers/HomePage';
import Productbox from '../components/Productbox';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import AddProPage from '../containers/AddProPage';
import profilePage from '../components/Profile'

const Apiroute = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/sell-your-product" component={AddProPage} exact={true} />
				<Route path="/container" component={Productbox} exact={true} />
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/productpage" component={ProductPage} exact={true} />
				<Route path="/myprofile"   component={profilePage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Apiroute;
