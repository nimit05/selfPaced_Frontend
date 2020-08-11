import React from "react";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import Middle from "../components/Middle";
import CateCon from "../components/CateCon";
import ShopByCate from "../components/ShopByCate";
import ShowCase from "../components/ShowCase";
import Base_Header from "../Hooks/Base_header";
import Product_cont from "../components/Product_cont";
import Footer from '../components/Footer'

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <ShopByCate />
        <ShowCase titleLeft="BEST SELLER" titleRight="TOP RATED" />
    {/*<CateCon title={"New Arrivals"} url="latest" />*/}
       
      </div>
    );
  }
}

export default HomePage;
