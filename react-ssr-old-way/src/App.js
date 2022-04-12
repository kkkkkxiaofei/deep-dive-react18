import React from "react";
import Sidebar from "./Sidebar";
import Detail from "./Detail";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="sideBar">
        <Sidebar name="side bar" />
      </div>
      <div className="content">
        <Detail name="detail" />
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
        </header>
      </div>
    </div>
  );
}

export default App;
