import React from "react";
import Sidebar from "./Sidebar";
import Detail from "./Detail";
import "./App.scss";
import Snapshot from "./Snapshot";

const App = () => {
  return (
    <div className="app">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="content">
        <Snapshot />
        <Detail/>
      </div>
    </div>
  );
}

export default App;
