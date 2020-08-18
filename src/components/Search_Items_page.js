import React from "react";
import Productbox from "./Productbox";
import CateCon from "./CateCon";
import Sub_Header from "./Sub_header";
import nf from "../img/search_not_found.svg";

export default class Search_items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const { name } = this.props.match.params;

    fetch(`/api/products/search/${name}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.setState(() => {
            return {
              products: data
            };
          });
        }
      });
  }
  render() {
    return (
      <div className="heading_search_con">
        <Sub_Header />
        {this.state.products.length === 0 ? (
          <div className="empty_search">
            <div className="img">
              <img src={nf} alt=" " />
            </div>
            <div className="text">Sorry! The product you are searching is unavailable</div>
          </div>
        ) : (
          <div>
            <div className="heading_search">
              <h1 className="heading_left_search">Search({this.state.products.length})</h1>
            </div>
            <div>
              <div className="search_items">
                {this.state.products.map(e => {
                  return (
                    <Productbox
                      title={e.title}
                      tag={e.tag}
                      stitle={e.s_title}
                      short_des={e.short_des}
                      price={e.Value}
                      refId={e.refrenceId}
                      bookimg={`/covers/${e.cover_img}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
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
