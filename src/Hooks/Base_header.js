import React from "react";
import home_icon from "../img/icon.svg";
import cart from "../img/cart.svg";
import plus from "../img/plus.svg";
import lib from "../img/lib.svg";
import picpro from "../img/propic.svg";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
const google_client_id = "616787203350-2u0gfkgi7uqecdg3r1culo5rc9urs4ah.apps.googleusercontent.com";

export default class Base_Header extends React.Component {
  responseGoogle = response => {
    fetch("/api/register/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tokenId: response.tokenId })
    })
      .then(res => res.json())
      .then(parJson => {
        if (parJson.email) {
          window.location.href = "/";
        }
      });
  };

  constructor(props) {
    super(props);

    fetch("/api/user")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data) {
          this.setState(() => {
            return {
              islogin: true,
              pro_pic: data.pro_img
            };
          });
        }
      });

    this.state = {
      islogin: false,
      pro_pic: null
    };
  }

  render() {
    return (
      <div className="base_header">
        <div className="img_cont_bh">
          {this.state.islogin ? (
            <div className="icon_bh">
              {" "}
              <Link to="/">
                <img className="home_svg " src={home_icon} alt=" " />
              </Link>
              <Link to="/myCart">
                <img src={cart} alt=" " />
              </Link>
              <Link to="/sell-your-product">
                <img src={plus} alt=" " />
              </Link>
              <Link to="/My-Library">
                <img src={lib} alt=" " />
              </Link>
              <Link to="/myprofile">
                <img className="base_header_pro_pic" src={this.state.pro_pic ? this.state.pro_pic : picpro} alt=" " />
              </Link>
            </div>
          ) : (
            <div className="reg_btn_div">
              <button
                id="reg_btn_bh"
                onClick={() => {
                  window.location.href = "/regis.html";
                }}
              >
                Register/Login
              </button>
              <GoogleLogin
                clientId={google_client_id}
                buttonText="Continue with Google"
                style={{ backgroundColor: "blue" }}
                className="gbtn"
                onSuccess={this.responseGoogle}
                onFailure={() => {
                  alert("Error in google login ");
                }}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
