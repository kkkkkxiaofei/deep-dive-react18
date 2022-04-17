import React, { useState, useEffect, useContext } from "react";
import * as API from "../api";
import { DataContext } from "../context/DataContext";

export const useData = () => {
  const ctx = useContext(DataContext);
  const result = ctx ?? window.__INIT_CONTEXT__;
  return result;
};

export const useFetch = (fetchCall) => {
  const [state, setState] = useState({ isPending: null, data: null });
  useEffect(async () => {
    setState({ ...state, isPending: true });
    const data = await fetchCall();
    setState({
      data,
      isPending: false,
    });
  }, [fetchCall]);
  return state;
};
