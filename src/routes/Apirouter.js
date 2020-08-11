import React from "react";
// import ReactDOM from 'react-dom'
import HomePage from "../containers/HomePage";
import Productbox from "../components/Productbox";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductPage from "../components/ProductPage";
import AddProPage from "../containers/AddProPage";
import profilePage from "../components/Profile";
import MyCart from "../components/MyCart";
import Header from "../components/Header";
import Library from "../containers/Library";
import Base_Header from "../Hooks/Base_header";
import Search_items from "../components/Search_Items_page";
import MyOrders from "../components/MyOrders";
import Admin_Panel from "../components/Admin_Panel";
import User_details from "../components/Admin_Panel_User";
import Payment_tab from "../components/Payment_Page";
import CateCon from "../components/CateCon";
import Sub_header from "../components/Sub_header";
import SpecPage from "../components/SpecPage";
import Footer from "../components/Footer"

const Apiroute = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Sub_header />
      <Switch>
        <Route path="/sell-your-product" component={AddProPage} exact={true} />
        <Route path="/container" component={Productbox} exact={true} />
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/productpage/:refId" component={ProductPage} exact={true} />
        <Route path="/My-Library" component={Library} exact={true} />
        <Route path="/myprofile" component={profilePage} />
        <Route path="/myCart" component={MyCart} />
        <Route path="/myorders" component={MyOrders} />
        <Route path="/Search_items/:name" component={Search_items} />
        <Route path="/Admin_panel" component={Admin_Panel} />
        <Route path="/payment" component={Payment_tab} />
		    <Route path="/spec/:name/:url/:url2" component={SpecPage} />
        <Route path="/Admin_panel_user/:username" component={User_details} />
      </Switch>
      <Base_Header />
      <Footer />
    </div>
    
  </BrowserRouter>
);

export default Apiroute;
