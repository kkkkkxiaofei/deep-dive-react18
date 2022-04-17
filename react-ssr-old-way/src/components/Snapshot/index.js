import React, { useEffect, useState } from "react";
import * as API from "../../api";
import Container from "../../shared/Container";
import "./Snapshot.scss";

const Snapshot = () => {
  const [metrics, setMetrics] = useState([]);
  useEffect(async () => {
    const metrics = await API.getMetrics();
    setMetrics(metrics);
  }, []);
  return (
    <Container title="Snapshot" className="snapshot">
      <div className="metricContainer">
        <div className="metricItem">
          <p>Watchers:{metrics.watchers}</p>
        </div>
        <div className="metricItem">
          <p>Forks:{metrics.forks}</p>
        </div>
        <div className="metricItem">
          <p>Issues:{metrics.issues}</p>
        </div>
      </div>
    </Container>
  );
};

export default Snapshot;
