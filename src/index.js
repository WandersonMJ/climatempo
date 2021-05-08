import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Global from "./styles/global";
import Provider from "./services";

ReactDOM.render(
  <>
    <Provider>
      <Global />
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
