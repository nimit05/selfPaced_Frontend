import React, { Component } from "react";
import comp_img from "../img/brain.svg";
import ee_img from "../img/electric-motor.svg";
import civil_img from "../img/civil.svg";
import ece_img from "../img/circuit.svg";
import mech_img from "../img/motor.svg";
import chem_img from "../img/research.svg";
import {Link} from "react-router-dom"
import arrow from "../img/next.svg";

export default class ShopByCate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="shop_by_cate_con">
        <h1 className="sbc_head">Get Notes By Category</h1>

        <div className="sbc_body_con">
				<Link to="/spec/Compute Science/cat/cse">
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={comp_img} alt="" />
            <h3>Computer Science Engineering</h3>
          </div>
  </Link>
				<Link to="/spec/Electrical/cat/ee">
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={ee_img} alt="" />
            <h3>Electrical Engineering</h3>
          </div>
  </Link>
				<Link to="/spec/Civil/cat/civil">
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={civil_img} alt="" />
            <h3>Civil Engineering</h3>
          </div>
  </Link>
				<Link to="/spec/Chemical/cat/ce">
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={chem_img} alt="" />
            <h3>Chemical Engineering</h3>
          </div>
  </Link>
          <Link to={`/spec/Electronics/cat/ece`}>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={ee_img} alt="" />
            <h3>Electronics Engineering</h3>
          </div>
  </Link>
          <Link to={`/spec/Mechanical/cat/me`}>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={civil_img} alt="" />
            <h3>Mechanical Engineering</h3>
          </div>
  </Link>
          <Link to={`/spec/Bio Tech/cat/bt`}>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={chem_img} alt="" />
            <h3>Bio Tech</h3>
          </div>
		  </Link>
		  <Link to={`/spec/B. Sc./cat/bsc`}>
          <div className="sbc_cate">
            {" "}
            <img className="sbc_cate_img" src={chem_img} alt="" />
            <h3>B. Sc.</h3>
          </div>
  </Link>
        </div>
      </div>
    );
  }
}
