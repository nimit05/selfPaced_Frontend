import React, { Component } from "react";
import comp_img from "../img/brain.svg";
import ee_img from "../img/electric-motor.svg";
import civil_img from "../img/civil.svg";
import ece_img from "../img/circuit.svg";
import mech_img from "../img/motor.svg";
import chem_img from "../img/research.svg";
import arrow from "../img/next.svg";

export default class ShopByCate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="shop_by_cate_con">
        <h1 className="sbc_head">Shop By Category</h1>
        
        <div className="sbc_body_con">
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={comp_img} alt="" />
            <h3>Computer Science Engineering</h3>
          </div>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={ee_img} alt="" />
            <h3>Electrical Engineering</h3>
          </div>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={civil_img} alt="" />
            <h3>Civil Engineering</h3>
          </div>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={chem_img} alt="" />
            <h3>Chemical Engineering</h3>
          </div>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={comp_img} alt="" />
            <h3>Computer Science Engineering</h3>
          </div>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={ee_img} alt="" />
            <h3>Electrical Engineering</h3>
          </div>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={civil_img} alt="" />
            <h3>Civil Engineering</h3>
          </div>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={chem_img} alt="" />
            <h3>Chemical Engineering</h3>
          </div>
         
        </div>
      </div>
    );
  }
}
