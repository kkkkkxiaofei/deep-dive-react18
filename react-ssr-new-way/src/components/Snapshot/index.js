import React from "react";
import { useData } from "../../hook";
import Container from "../../shared/Container";
// import "./Snapshot.scss";

const Snapshot = () => {
  const metrics = useData("metrics");
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
