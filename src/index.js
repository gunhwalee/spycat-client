import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import App from "./app/App";
import store from "./app/store";
import "./assets/fonts/Font.css";
import GlobalStyles from "./styles/GlobalStyles";

const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);
