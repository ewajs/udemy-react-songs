import React from "react";
import ReactDOM from "react-dom";
// Named exports
import { Provider } from "react-redux";
import { createStore } from "redux";

// Default exports
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
