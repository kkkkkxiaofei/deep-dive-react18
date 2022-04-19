import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ data, children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};