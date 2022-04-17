import React from "react";
import Sidebar from "./Sidebar";
import Detail from "./Detail";
import "./App.scss";
import Snapshot from "./Snapshot";
import { DataProvider } from "./context/DataContext";

const App = ({ data }) => {
  return (
    <DataProvider data={data}>
      <div className="app">
        <div className="sideBar">
          <Sidebar /> 
        </div>
        <div className="content">
          <Snapshot />
          <Detail />
        </div>
      </div>
    </DataProvider>
  );
};

export default App;
