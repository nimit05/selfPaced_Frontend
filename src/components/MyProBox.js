import React from "react";
import bookcover from "../img/bookcover.jpg";
import info from "../img/info.svg";
import bin from "../img/bin.svg";
import eye from "../img/eye.svg";

// props to send are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class MyProBox extends React.Component {
  loaded = id => {
    document.getElementById(id).style.display = "block";
  };

  show = () => {
    window.location.href = this.props.file;
  };
  info = () => {
    window.location.href = "/productpage/" + this.props.refId;
  };

  delete = () => {
    fetch("/api/products/" + this.props.productId, { method: "DELETE" })
      .then(res => JSON.stringify(res))
      .then(data => {
        if (!data.error) {
          window.location.reload();
        }
      });
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Myproductcont" id={this.props.refId}>
        <div className="myBtnCon">
          <img onClick={this.show} src={eye} alt="" />
          <img onClick={this.info} src={info} alt="" />
          <img onClick={this.delete} src={bin} alt="" />
        </div>

        <div className="Myproduct_img">
          <div className="Mytag">
            <strong>{this.props.tag}</strong>
          </div>
          <img
            onLoad={() => {
              this.loaded(this.props.refId);
            }}
            className="Mybookcover"
            src={this.props.bookimg ? this.props.bookimg : bookcover}
            alt=" "
          />
        </div>
        <div className="Myproduct_body">
          <h3>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  // window.location.reload()
  return response.json(); // parses JSON response into native JavaScript objects
}
