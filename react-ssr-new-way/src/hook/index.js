import React, { useState, useEffect, useContext } from "react";
import * as API from "../api";
import { DataContext } from "../context/DataContext";

export const useData = (key) => {
  const ctx = useContext(DataContext);
  if (ctx) {
    console.log(key, ctx);
    return ctx[key].read();
  }
  return window[key];
};