import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import UserManagement from "./UserManagement";

ReactDOM.render(
  <Provider store={store}>
    <UserManagement />
  </Provider>,

  document.getElementById("root")
);
