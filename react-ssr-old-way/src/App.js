import React from "react";
import Sidebar from "./components/Sidebar";
import Detail from "./components/Detail";
import "./App.scss";
import Snapshot from "./components/Snapshot";
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
