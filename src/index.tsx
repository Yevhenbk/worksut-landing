/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { Store } from "./core/core.app.context";
import { Provider } from "react-redux";
import App from "./views/app/app.main";

// FIREBASE imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// * Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAIqxfM-DvUARQ3zi00spVim7g5FgmM90",
  authDomain: "worksut-f01dc.firebaseapp.com",
  projectId: "worksut-f01dc",
  storageBucket: "worksut-f01dc.appspot.com",
  messagingSenderId: "1043731846982",
  appId: "1:1043731846982:web:da72053fed8debd8287747",
  measurementId: "G-KLNK1CPG7H",
};

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
