import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import Apiroute from "./routes/Apirouter";

window.addEventListener("load", function () {
  setTimeout(function () {
    // This hides the address bar:
    window.scrollTo(0, 1);
  }, 0);
});
ReactDOM.render(<Apiroute />, document.getElementById("root"));
