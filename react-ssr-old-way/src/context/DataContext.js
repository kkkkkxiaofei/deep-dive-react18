import React, { createContext } from "react";

export const DataContext = createContext({
  repos: []
});

export const DataProvider = ({ data, children }) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}
