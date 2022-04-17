import React, { useEffect, useState } from "react";
import { DataContext } from "./context/DataContext";
import * as API from "./api";
import logo from "./logo.svg";

const Snapshot = () => {
  const [metrics, setMetrics] = useState([]);
  useEffect(async () => {
    console.log("========1");
    const metrics = await API.getMetrics();
    setMetrics(metrics);
  }, []);
  return (
    <div>
      <h1>Metrics</h1>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <div>
        <span>Watchers:{metrics.watchers}</span>
      </div>
      <div>
        <span>Forks:{metrics.forks}</span>
      </div>
      <div>
        <span>Issues:{metrics.issues}</span>
      </div>
    </div>
  );
};

export default Snapshot;