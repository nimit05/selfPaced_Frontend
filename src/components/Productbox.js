import React from "react";
import bookcover from "../img/bookcover.jpg";
import newImg from "../img/new.svg";

// props to send are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class Productbox extends React.Component {
  loaded = id => {
    document.getElementById(id).style.display = "inline-block";
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productcont" id={this.props.refId}>
        <img className="new_tag" src={newImg} alt="" />
        <div className="tag">
          <strong>{this.props.tag}</strong>
        </div>
        <div
          className="product_img"
          onClick={() => {
            window.location.href = `/productpage/${this.props.refId}`;
          }}
        >
          <img
            className="bookcover"
            onLoad={() => {
              this.loaded(this.props.refId);
            }}
            src={this.props.bookimg ? this.props.bookimg : bookcover}
            alt={this.props.title}
          />
        </div>
        <div className="product_body">
          <h3>{this.props.title}</h3>
          <h6>({this.props.stitle})</h6>
          <p>{this.props.short_des}</p>
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
  return response.json(); // parses JSON response into native JavaScript objects
}
