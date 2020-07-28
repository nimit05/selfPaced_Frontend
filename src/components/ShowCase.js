import React, { Component } from "react";
import ProductBox from "./Productbox";
import sampleCover from "../img/bookcover.jpg";
import best from "../img/best.svg";

export default class ShowCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lProDet: {
        title: "Title",
        tag: "PDF",

        stitle: "short title ",
        short_des: "short description ",
        price: "0",
        image: ""
      }
    };
  }

  render() {
    return (
      <div className="show_case_con">
        <div className="show_case_left">
          <img className="bestImg" src={best} alt="" />
          <h2 className="scl_head">{this.props.titleLeft}</h2>
          <ProductBox
            title={this.state.lProDet.title}
            tag={this.state.lProDet.tag}
            bookimg={this.state.lProDet.image === "" ? sampleCover : this.state.lProDet.image}
            stitle={this.state.lProDet.stitle}
            short_des={this.state.lProDet.short_des}
            price={this.state.lProDet.price}
            refId={"sample" + this.props.titleLeft}
          />
          <h4 className="sc_see_more"> See More -></h4>
        </div>
        <div className="show_case_right">
          <h2 className="scl_head">{this.props.titleRight}</h2>

          <ProductBox
            title={this.state.lProDet.title}
            tag={this.state.lProDet.tag}
            bookimg={this.state.lProDet.image === "" ? sampleCover : this.state.lProDet.image}
            stitle={this.state.lProDet.stitle}
            short_des={this.state.lProDet.short_des}
            price={this.state.lProDet.price}
            refId={"sample" + this.props.titleRight}
          />
          <h4 className="sc_see_more"> See More -></h4>
        </div>
      </div>
    );
  }
}
