import React from "react";
import nf from "../img/search_not_found.svg";

export default function page404() {
  return (
    <>
      <div className="empty_search">
        <div className="img">
          <img src={nf} alt=" " />
        </div>
        <div className="text" style={{ margin: 40 }}>
          Sorry! Page Not Found{" "}
        </div>
        <br />
      </div>
      <a style={{ width: 200, marginLeft: "45%" }} href="/">
        Go Back to Home{" "}
      </a>
    </>
  );
}
