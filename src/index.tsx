/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import SampleView from "./sample/SampleView";
import { FontStyle } from "./static/fonts/fonts";
// import App from "./views/app/app.main";

ReactDOM.render(
  <React.StrictMode>
    <SampleView />
  </React.StrictMode>,
  document.getElementById("root")
);
