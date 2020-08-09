import React from "react";
import Productbox from "./Productbox";
import { Link } from "react-router-dom";

// props to send to productbox are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class CateCon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      proArray: []
    };

    postData(`/api/products/${this.props.url}/10/0`).then(data => {
      console.log(data);
      this.setState(() => {
        return { proArray: data.products };
      });
    });
  }
  render() {
    return (
      <div className="CateCon">
        <div className="cate_head">
          <h1>{this.props.title}</h1>
          <Link to={`spec/${this.props.title}/${this.props.url}`}>
            <h3>See More -></h3>
          </Link>
        </div>

        <div className="cate_body">
          {this.state.proArray.map(e => {
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
    );
  }
}

async function postData(url = "", data = {}) {
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
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
