import React from "react";
import Header from "../components/Header";
import MainHeader from "../components/MainHeader";
import Middle from "../components/Middle";
import CateCon from "../components/CateCon";
import ShopByCate from "../components/ShopByCate";
import ShowCase from "../components/ShowCase";
import Base_Header from "../Hooks/Base_header";
import Product_cont from "../components/Product_cont";

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <MainHeader />
        <ShopByCate />
        <ShowCase titleLeft="BEST SELLER" titleRight="TOP RATED" />
        <CateCon title={"New Arrivals"} />
        <ShowCase titleLeft="MOST LIKED" titleRight="TOP FREE" />
        <Base_Header />
      </div>
    );
  }
}

export default HomePage;
