import React, { useRef, useState } from "react";
// import homePage from './HomePage';
import mainLOGO from "../img/name-logo.png";
import cart from "../img/cart.svg";
import lib from "../img/lib.svg";
import plus from "../img/plus.svg";
import propic from "../img/propic.svg";
import { GoogleLogin } from "react-google-login";
import magni from "../img/search.svg";
import { Link } from "react-router-dom";
const google_client_id = "1059529825547-etkqs3dglggp4fo5icfd2hf0c2j2sumr.apps.googleusercontent.com";

class Header extends React.Component {
  findName = () => {
    let c = document.getElementById("main_search_inp").value;
    if (c === "") {
      // eslint-disable-next-line
      this.state.searchNames = [];
      this.setState(() => {
        return {
          serachNames: []
        };
      });
      return;
    }
    let arr = this.state.allItemsName.filter(str => {
      if (str.indexOf(c) > -1) {
        return true;
      } else {
        return false;
      }
    });
    // eslint-disable-next-line
    this.state.searchNames = arr;

    this.setState(() => {
      return {
        serachNames: arr
      };
    });
  };
  responseGoogle = response => {
    fetch("/api/register/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tokenId: response.tokenId })
    })
      .then(res => res.json())
      .then(parJson => {
        if (parJson.email) {
          window.location.reload();
        } else if (parJson.error) {
          alert("error occured");
        }
      });
  };

  findbook() {
    if (document.getElementById("main_search_inp").value != null) {
      var input = document.getElementById("main_search_inp");
      input.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          if (!document.getElementById("main_search_inp").value.trim()) {
            window.location.href = "/";
          } else {
            window.location.href = `/Search_items/${document.getElementById("main_search_inp").value.trim()}`;
          }
        }
      });
    }
  }

  constructor(props) {
    super(props);

    fetch("/api/user")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (!data.error) {
          this.setState(() => {
            return {
              islogin: true,
              username: data.username,
              coins: data.Coins,
              pro_pic: data.pro_img
            };
          });
        }
      });

    fetch("/api/login/isAdmin")
      .then(res => res.json())
      .then(data => {
        if (data == true) {
          this.setState(() => {
            return {
              isAdmin: true
            };
          });
        }
      });

    this.state = {
      islogin: false,
      username: null,
      pro_pic: null,
      allItemsName: [],
      searchNames: [],
      isAdmin: false
    };
  }

  render() {
    return (
      <div className="header_cont">
        <img
          src={magni}
          alt=" "
          id="search_btn_header"
          onClick={() => {
            document.getElementById("main_search_inp").classList.toggle("main_search_inp_mob");
            document.querySelector(".header_left").classList.toggle("header_left_none");
          }}
        />
        <Link className="header_left" to="/">
          <img src={mainLOGO} alt=" " />
        </Link>

        <div className="parent search_con">
          <input
            onChange={this.findName}
            id="main_search_inp"
            placeholder="Search"
            type="text"
            onClick={this.findbook}
            className="main_search_inp"
          />
          <div className="searchRe">
            {this.state.searchNames.map((e, i) => {
              if (i > 5) {
                return false;
              } else {
                return <li key={i}>{e}</li>;
              }
            })}
          </div>
        </div>

        <div className="user_btn_con">
          {this.state.islogin ? (
            <div className="frse logindet">
              <Link to="/sell-your-product" class="tooltip">
                {" "}
                <img src={plus} alt=" " />
                <span class="tooltiptext">Sell Items</span>
              </Link>
              <Link to="/myCart" class="tooltip">
                {" "}
                <img src={cart} alt=" " />
                <span class="tooltiptext">Cart</span>
              </Link>
              <Link to="/My-Library" class="tooltip">
                {" "}
                <img src={lib} alt=" " />
                <span class="tooltiptext">My Library</span>
              </Link>

              <div className="tooltip profile">
                <Link to="/myprofile">
                  <img id="pro_pic" src={this.state.pro_pic ? this.state.pro_pic : propic} alt=" " />
                </Link>
              </div>
              {this.state.isAdmin && (
                <div className="tooltip profile">
                  <Link to="/Ponga_Wera">
                    <img id="pro_pic" src={propic} alt=" " />
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="frse">
              <button
                id="reg_btn"
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
                onFailure={err => {
                  console.log("error in Google Login", err);
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

export default Header;
