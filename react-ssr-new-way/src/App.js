import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.scss";
import { DataProvider } from "./context/DataContext";

const Sidebar = lazy(() => import("./components/Sidebar"));
// const Detail = lazy(() => import("./components/Detail"));
const Snapshot = lazy(() => import("./components/Snapshot"));

const App = ({ data }) => {
  return (
    <DataProvider data={data}>
      <Suspense fallback={<div>loading app...</div>}>
        <ErrorBoundary
          FallbackComponent={({ error }) => <div>{error.stack}</div>}
        >
          <div className="app">
            <div className="sideBar">
              <Suspense fallback={<div>loading sidebar...</div>}>
                <Sidebar />
              </Suspense>
            </div>
            <div className="content">
              <Suspense fallback={<div>loading snapshot...</div>}>
                <Snapshot />
              </Suspense>
              {/* <Suspense fallback={<div>loading detail...</div>}>
              <Detail />
            </Suspense> */}
            </div>
          </div>
        </ErrorBoundary>
      </Suspense>
    </DataProvider>
  );
};

export default App;
