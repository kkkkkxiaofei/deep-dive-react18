import React, { useCallback } from "react";
import { getRepo } from "../../api";
import { useData, useFetch } from "../../hook";
import Container from "../../shared/Container";
import "./Detail.scss";

const Detail = () => {
  const { selectedRepo } = useData();
  const memoGetRepo = useCallback(
    () => getRepo(selectedRepo.name),
    [selectedRepo]
  );
  const result = useFetch(memoGetRepo);
  const startRender = () => {
    const { data, isPending } = result;
    if (isPending) {
      return <div>loading...</div>;
    } else {
      return data ? (
        <div className="info">
          <div className="title">{`Introduction about ${data.name}:`}</div>
          <div className="subTitle">{data.description}</div>
        </div>
      ) : null;
    }
  };

  return (
    <Container title="Detail" className="detail">
      {startRender()}
    </Container>
  );
};

export default Detail;
