import React, { useCallback } from "react";
import { getRepo } from "./api";
import { useData, useFetch } from "./hook";

const Detail = () => {
  const { selectedRepo } = useData();
  const memoGetRepo = useCallback(() => getRepo(selectedRepo.name), [selectedRepo]);
  const result = useFetch(memoGetRepo);
  const startRender = () => {
    const { data, isPending } = result;
    if (isPending) {
      return <div>loading...</div>;
    } else {
      return data ? (
        <div>
          <div>{data.name}</div>
          <div>{data.description}</div>
        </div>
      ) : null;
    }
  };

  return (
    <div>
      <h1>Repo details</h1>
      {startRender()}
    </div>
  );
};

export default Detail;
