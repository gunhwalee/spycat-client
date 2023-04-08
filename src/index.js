import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./app/App";
import store from "./app/store";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
