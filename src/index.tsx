import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Contacts } from "./contacts/components/Contacts";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Contacts />
  </Provider>,
  document.getElementById("root")
);
