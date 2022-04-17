import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const startHydration = () => {
  ReactDOM.hydrate(
    <React.StrictMode>
      <App data={window.__INIT_CONTEXT__} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

startHydration();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
