import React, { useMemo } from "react";
import { DataContext, useData } from "./context/DataContext";
import * as API from "./api";

const Detail = () => {
  const { selectedRepo } = useData(DataContext) || {};
  const repoDetails = useMemo(async () => {
    if (selectedRepo) {
      return await API.getRepo(selectedRepo.name);
    }
    return null;
  }, [selectedRepo]);

  return (
    <div>
      <h1>Repo details</h1>
      {repoDetails && (
        <div>
          <div>{repoDetails.name}</div>
          <div>{repoDetails.description}</div>
        </div>
      )}
    </div>
  );
};

export default Detail;
