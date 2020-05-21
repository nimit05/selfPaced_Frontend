import React from 'react';
// import ReactDOM from 'react-dom'
import HomePage from '../components/HomePage';
import Productbox from '../components/Productbox';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from '../components/ProductPage'

const Apiroute = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/container" component={Productbox} />
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/productpage" component={ProductPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Apiroute;
