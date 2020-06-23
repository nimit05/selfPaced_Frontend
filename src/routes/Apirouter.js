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
import Base_Header from '../Hooks/Base_header';
import Search_items from '../components/Search_Items_page';
import MyOrders from '../components/MyOrders'
import Admin_Panel from '../components/Admin_Panel'
import User_details from '../components/Admin_Panel_User'
import Wallet from '../components/Wallet'

const Apiroute = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/sell-your-product" component={AddProPage} exact={true} />
				<Route path="/container" component={Productbox} exact={true} />
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/productpage/:refId" component={ProductPage} exact={true} />
				<Route path="/My-Library" component={Library} exact={true} />
				<Route path="/myprofile" component={profilePage} />
				<Route path="/myCart" component={MyCart} />
				<Route path="/myorders" component={MyOrders} />
				<Route path="/Base_Header" component={Base_Header} />
				<Route path="/Search_items/:name" component={Search_items} />
				<Route path = "/Admin_panel" component={Admin_Panel} />
				<Route path = "/Admin_panel_user/:username" component={User_details} />
				<Route path = "/Wallet" component={Wallet} />
			</Switch>
			<Base_Header />
		</div>
	</BrowserRouter>
);

export default Apiroute;
