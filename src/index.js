import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalState } from "./Components/Global/ContexGlobal/GlobalContex";
import { Provider } from "react-redux";
import { store } from "../src/Components/Global/reduxGLobal/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalState>
        <Provider store={store}>
          <App />
        </Provider>
      </GlobalState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
