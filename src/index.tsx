/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { Store } from "./core/core.app.context";
import { Provider } from "react-redux";
import App from "./views/app/app.main";
require("dotenv").config();

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
