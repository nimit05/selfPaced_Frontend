import React, { Component } from "react";
import ProductBox from "./Productbox";
import sampleCover from "../img/bookcover.jpg";
import best from "../img/best.svg";
import { Link } from "react-router-dom";

export default class ShowCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rProDet: {
        title: "Title",
        tag: "PDF",

        s_title: "short title ",
        short_des: "short description ",
        price: "0",
        refrenceId: "sma1",
        cover_img: ""
      },
      lProDet: {
        title: "Title",
        tag: "PDF",
        refrenceId: "sample1",

        s_title: "short title ",
        short_des: "short description ",
        price: "0",
        cover_img: ""
      }
    };
    fetch("/api/products/rated/1/0")
      .then(d => d.json())
      .then(data => {
        if (data.products) {
          this.setState({ rProDet: data.products[0] });
        }
      });
    fetch("/api/products/mostB/1/0")
      .then(d => d.json())
      .then(data => {
        if (data.products) {
          this.setState({ lProDet: data.products[0] });
        }
      });
  }

  render() {
    return (
      <div className="show_case_con">
        {this.state.lProDet && (
          <div className="show_case_left">
            <img className="bestImg" src={best} alt="" />
            <h2 className="scl_head">{this.props.titleLeft}</h2>
            <ProductBox
              title={this.state.lProDet.title}
              tag={this.state.lProDet.tag}
              bookimg={"/covers/" + this.state.lProDet.cover_img}
              stitle={this.state.lProDet.s_title}
              short_des={this.state.lProDet.short_des}
              price={this.state.lProDet.price}
              refId={this.state.lProDet.refrenceId}
            />
            <Link to="/spec/Best Seller/mostB/n">
              {" "}
              <h4 className="sc_see_more"> See More -></h4>
            </Link>
          </div>
        )}
        {this.state.rProDet && (
          <div className="show_case_right">
            <h2 className="scl_head">{this.props.titleRight}</h2>

            <ProductBox
              title={this.state.rProDet.title}
              tag={this.state.rProDet.tag}
              bookimg={"/covers/" + this.state.rProDet.cover_img}
              stitle={this.state.rProDet.s_title}
              short_des={this.state.rProDet.short_des}
              price={this.state.rProDet.price}
              // refId={"sample" + this.props.titleRight}
              refId={this.state.rProDet.refrenceId}
            />
            <Link to="/spec/Best Seller/rated/n">
              {" "}
              <h4 className="sc_see_more"> See More -></h4>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
