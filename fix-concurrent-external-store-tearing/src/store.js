import { useEffect, useState, useCallback, useSyncExternalStore } from "react";

const createStore = (initialState) => {
  let state = initialState;

  const listeners = new Set();

  const notify = () => [...listeners].forEach((listener) => listener());

  const dispatch = (actionFn) => {
    state = actionFn(state);
    notify();
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const getState = () => state;

  return {
    getState,
    dispatch,
    subscribe
  };
};

export const store = createStore({
  x: 0,
  y: 0
});

// cause tearing
export const useSelector = (selector = ($) => $) => {
  const [state, setState] = useState(selector(store.getState()));
  useEffect(() => {
    const callback = () => {
      setState(selector(store.getState()));
    };
    store.subscribe(callback);
  }, [selector]);
  return state;
};

// // fix tearing
// export const useSelector = (selector = ($) => $) => {
//   return useSyncExternalStore(
//     store.subscribe,
//     useCallback(() => selector(store.getState()), [selector])
//   );
// };
