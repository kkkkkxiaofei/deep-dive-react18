import {createContext, useContext} from 'react';

const DataContext = createContext(null);

export function DataProvider({children, data}) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData(key) {
  const ctx = useContext(DataContext);
  if (ctx !== null) {
    // This context is only provided on the server.
    // It is here to simulate a suspending data fetch.
    return ctx[key] ? ctx[key].read() : null;
  }
  // on client, for hydrating
  return window[key];
}
