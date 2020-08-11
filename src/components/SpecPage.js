import React, { useState, useEffect } from "react";
import Productbox from "./Productbox";
import CateCon from "./CateCon";

export default class SpecPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    fetch(
      `/api/products/${this.props.match.params.url}${
        this.props.match.params.url2 !== "n" ? "/" + this.props.match.params.url2 : ""
      }/20/0`
    )
      .then(res => res.json())
      .then(data => {
        if (data.products) {
          this.setState({ products: data.products });
        }
      });
  }
  componentWillUpdate() {
    fetch(
      `/api/products/${this.props.match.params.url}${
        this.props.match.params.url2 !== "n" ? "/" + this.props.match.params.url2 : ""
      }/20/0`
    )
      .then(res => res.json())
      .then(data => {
        if (data.products) {
          this.setState({ products: data.products });
        }
      });
  }
  render() {
    return (
      <div className="heading_spec_con">
        <div className="heading_spec">
          <h1 className="heading_left_spec">
            {" "}
            {this.props.match.params.name} ({this.state.products.length})
          </h1>
        </div>
        <div>
          {this.state.products.length ? (
            <div className="spec_items">
              {this.state.products.map(e => {
                return (
                  <Productbox
                    title={e.title}
                    tag={e.tag}
                    stitle={e.s_title}
                    short_des={e.short_des}
                    refId={e.refrenceId}
                    bookimg={`/covers/${e.cover_img}`}
                  />
                );
              })}
            </div>
          ) : (
            <div className="spec_error">
              <h2>Sorry! NO such product found.😁😁</h2>
            </div>
          )}
        </div>
        <br />
        <CateCon title={"Top Rated"} url={"rated"} />
      </div>
    );
  }
}
async function postData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
