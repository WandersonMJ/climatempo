import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Global from "./styles/global";
import Provider from "./services";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider>
      <Global />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
