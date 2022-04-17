import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ data, children }) => {
  const [state, setState] = useState(data ?? { repos: [], selectedRepo: null });
  const exposedValue = {
    ...state,
    updateRepos: (repos) => setState({ ...state, repos }),
    updateSelectedRepo: (repo) => setState({ ...state, selectedRepo: repo }),
  };
  return (
    <DataContext.Provider value={exposedValue}>{children}</DataContext.Provider>
  );
};