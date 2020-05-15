import React from 'react';
// import ReactDOM from 'react-dom'
import HomePage from '../components/HomePage';
import Productbox from '../components/Productbox';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Apiroute = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/container" component={Productbox} />
				<Route path="/" component={HomePage} exact={true} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Apiroute;
