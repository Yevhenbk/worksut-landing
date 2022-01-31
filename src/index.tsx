/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { Store } from "./core/core.app.context";
import SampleView from "./sample/SampleView";
import { FontStyle } from "./static/fonts/fonts";
import { Provider } from "react-redux";

// import App from "./views/app/app.main";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <SampleView />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
