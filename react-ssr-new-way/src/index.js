import React from "react";
import { hydrateRoot } from "react-dom";
// import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// new way to hydrate with server stream
const startHydration = () => {
  hydrateRoot(
    document.getElementById("root"),
    <React.StrictMode>
      <App data={window.__INIT_CONTEXT__} />
    </React.StrictMode>
  );
};

startHydration();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
